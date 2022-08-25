import CartContext from "../../context/CartContext";
import React, { useContext, useEffect, useState } from "react";

    
    const ItemCart = ({ id, name, quantity, price }) => {
    
    const {removeProduct} = useContext(CartContext)

    const handleRemoveItem = (e) => {
        e.stopPropagation()
        removeProduct(id)
    }

    return (
        <ul>
        <li>Cantidad: {quantity}</li>
        <li>${price}</li>
        <li>{name}</li>
        <li>Subtotal: ${price * quantity}</li>
        <button  onClick={handleRemoveItem} className = "cartButtons">Eliminar</button>      
        </ul>                 
    );
}

export default ItemCart