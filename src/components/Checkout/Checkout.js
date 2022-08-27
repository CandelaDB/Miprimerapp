import CartContext from "../../context/CartContext";
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore';
import { ddbb } from '../../services/firebase/index';
import { useNotification } from "../../notifications/Notifications";
import './Checkout.css';
import React, { useContext, useState } from 'react';




const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const { clearCart, cart, totalToPay } = useContext(CartContext)

    const setNotification = useNotification()

    const [name, setName] = useState()

    const [email, setEmail] = useState()

    const [phone, setPhone] = useState()




    const handleSubmit = (e) => {
        e.preventDefault()
    }


    const handleCreateOrder = () => {

        setLoading(true)

        const objectToOrder = {
            name: name,
            email: email,
            phone: phone,
            items: cart,
            total: totalToPay,
            date: new Date(),
        }

        const batch = writeBatch(ddbb)

        const ids = cart.map(product => product.id)

        const stockUnavailable = []

        const collectionRef = collection(ddbb, "allProducts")

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const product = cart.find(product => product.id === doc.id)
                    const productQuantity = product.quantity

                    if (dataDoc.stock >= productQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - productQuantity })
                    } else {
                        stockUnavailable.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (stockUnavailable.length === 0) {
                    const collectionRef = collection(ddbb, 'orders')
                    return addDoc(collectionRef, objectToOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', allProducts: stockUnavailable })
                }
            }).then(({ id }) => {
                batch.commit()
                clearCart()
                setNotification('success', `Order generated successfully. Your order id is:${id}`)
            }).catch(error => {
                if (error.type === 'out_of_stock') {
                    setNotification('error', 'Some of the products you chose hasnt stock available')
                } else {
                    console.log(error)
                }
            }).finally(() => {
                setLoading(false)
            })


    }


    if (loading) {
        return <h1 className="loader">Generar compra</h1>
    }



    return (
        <>
            <h1 className="itemDetailTitle">Crear compra</h1>

            <form onSubmit={handleSubmit} className="checkoutForm">
                <label className="checkoutLabels">Nombre
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="checkoutInputs" />
                    {name?.length > 0 ? "" : (<p className="emptyInputText">Completa el campo</p>)}
                </label>
                <label className="checkoutLabels">Telefono
                    <input type="number" name="phone" onChange={(e) => setPhone(e.target.value)} className="checkoutInputs" />
                    {phone?.length > 0 ? "" : (<p className="emptyInputText">Completa el campo</p>)}
                </label>
                <label className="checkoutLabels">Email
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="checkoutInputs" />
                    {email?.length > 0 ? "" : (<p className="emptyInputText">Completa el campo</p>)}
                </label>
                <button disabled={!name?.length > 0 || !phone?.length > 0 || !email?.length > 0} type="submit" value="submit" onClick={handleCreateOrder} className={!name?.length > 0 || !phone?.length > 0 || !email?.length > 0 ? "createOrderButton disabled" : "createOrderButton"}>Crear compra</button>
            </form>
        </>
    )
}



export default Checkout