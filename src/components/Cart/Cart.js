import { Link } from "react-router-dom";
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";



const Cart = () => {


    const { clearCart, cart, totalToPay, totalQuantity } = useContext(CartContext)


    if (!totalQuantity) {
        return (
            <>
                <h1 className="productDetail">Tu carrito esta vacio</h1>
                <h2 className="productDetail">Mira nuestros productos</h2>

                <Link to={`/`} className="Option">
                    <button className="cartButtons">Ir a inicio</button>
                </Link>
            </>
        )
    }


    return (
        <>
            <h1 className="itemDetailTitle">CART</h1>
            {cart.map(product => <ItemCart key={product.id} {...product} />)}
            <h2 className="itemDetailTitle">Total ${totalToPay}</h2>

            <button onClick={clearCart} className="cartButtons">Vaciar carrito</button>
            <Link to={`/checkout`} className="Option">
                <button className="cartButtons">Confirmar</button>
            </Link>

        </>
    )




}

export default Cart