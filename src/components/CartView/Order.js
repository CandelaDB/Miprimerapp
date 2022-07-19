import React from "react";
import "./order.css";


const Order = ({order, getTotal}) => {
    const db = getFirestore();
    const collectionReference = collection (db,"orders");
    window.scrollTo(0,0)

    const data = new Date(). toDateString + "";
    const orderList = {
        buyer: {
            nombre: "Carlos Lopez",
            email:"carlos1@gmail.com",
            tel:"121212121212",
            direccion:"calle falsa 123",
        },
        items: order.map((element) => ({
            id:element.item.id,
            cantidad: element.quantity,
            precio: element.item.precio,
            nombre: element.item.nombre,
        })),
        date: date,
        total: getTotal(),
    };
    const handleCheckout = () => {
        addDoc (collectionReference, orderList). then((response) =>{
            console.log (response);
            Swal.fire({
                icon:"success",
                title: "Tu orden fue confirmada",
                text:'Llegara a tu domicilio en 72hs, el ID de tu orden es: ' + response.id,
            });
        });
    };
    return ( <div className="">
        <h2>¿Confirmamos la compra?</h2>
        {order.map((element)=> (
            <div className="" key={element.item.id}>
                <p> {element.item.name}</p>
                -
                <span> ${element.item.precio}</span>
                <br/>
                <span> Cantidad: {element.quantity} </span>
                <hr></hr>
                </div>
        ))}
        <h4>Total de la compra: ${getTotal()}</h4>

        <button onClick={handleCheckout}> Confirmar</button>
    </div>
    );
};
export default Order; 