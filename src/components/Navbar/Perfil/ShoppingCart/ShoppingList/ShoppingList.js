import { useCartContext } from "../../../../../contexts/CartContext";
import { Atras } from "../../../../Atras/Atras";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingContainer } from "./Styled/ShoppingContainer";
import Button from "../../../../../Style/Boton";
import { FormOrder } from "../FormOrder/FormOrder";

export const ShoppingList = () => {
    const [showForm, setShowForm] = useState(false);
    const { cart, functionContext } = useCartContext();
    const { clearCart, getTotal, getQuantity } = functionContext;

    const handlerForm = () => {
    setShowForm(!showForm);
    };

    return (
    <ShoppingContainer showForm={showForm}>
        <div className="box-listShopping ">
        <Atras link="/store" />
        <h3 className="list-title">Lista de productos</h3>
        <ul className="box-items">
            {cart.length > 0 ? (
            cart.map((item) => <Card key={item.producto.id} item={item} />)
            ) : (
            <p className="cart-empty">El carrito esta vacio</p>
            )}
        </ul>
        <div className="cart-footer">
            {cart.length > 0 ? (
            <Button className="btn clearCart" onClick={() => clearCart()}>
                VACIAR CARRITO
            </Button>
            ) : (
            <Link to="/store" className="btn goStore">
                <Button>IR A LA TIENDA</Button>
            </Link>
            )}
            <h3 className="quantity">
            Productos: <p>{getQuantity()}</p>
            </h3>

            {cart.length > 0 && (
            <Button className="btn-buying" onClick={handlerForm}>
                FINALIZAR COMPRA
            </Button>
            )}
        </div>
        <h3 className="total">
            Total: <p>${getTotal()}</p>
        </h3>
        </div>
        <FormOrder showForm={showForm} handlerForm={handlerForm} />
    </ShoppingContainer>
    );
};