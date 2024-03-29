import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { ddbb } from "../../services/firebase";
import React, { useEffect, useState } from 'react';


const ItemListContainer = (props) => {

    const [allProducts, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()



    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId ? (
            query(collection(ddbb, 'allProducts'), where('category', '==', categoryId))
        ) : (collection(ddbb, 'allProducts'))

        getDocs(collectionRef).then(response => {
            
            const allProductsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })

            setProducts(allProductsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        
    }, [categoryId])



    if (loading) {
        return <h2 className="loader">Cargando...</h2>
    }

    return (
        <div className="App-header">

            <h1>{props.title}</h1>
            <h3 className="greeting">{props.greeting}</h3>
            < ItemList allProducts={allProducts} />
        </div>

    )
}

export default ItemListContainer