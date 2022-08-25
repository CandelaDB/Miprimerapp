import React, { useContext, useEffect, useState } from 'react';
import CounterButton from "../Counter/Counter"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"




const ItemDetail = ({ id, img, name, category, price, description, stock }) => {


    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addProducts } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addProducts({ id, name, price, quantity })
        setQuantityAdded(quantity)

    }

    return (
        <div className="itemDetailCard">
            <h3 className="itemDetailTitle">{name}</h3>
            <img src={img} className="imgDetail" alt="images" />
            <p className="itemCategory">Cantidad: {category}</p>
            <p className="itemPrice">${price}</p>
            <p className="itemDescription">{description}</p>
            {quantityAdded === 0
                ? <CounterButton onAdd={handleOnAdd} stock={stock} />
                : <Link to='/cart'className="finishShopping"> Finalizar compra </Link>
            }
        </div>

    )

}



export default ItemDetail