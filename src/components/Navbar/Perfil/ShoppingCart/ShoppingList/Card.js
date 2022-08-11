import { CardStyled } from "./Styled/CardStyled";
import { useCartContext } from "../../../../../contexts/CartContext";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
    const { functionContext } = useCartContext();
    const { removeFromCart } = functionContext;
    const { producto, quantity } = item;

    return (
    <CardStyled>
        <li className="box-image">
        <img src={producto.image2} alt={producto.name} />
        <img src={producto.image} alt={producto.name} />
        </li>
        <li className="box-info">
        <Link to={`/itemDetail/${producto.id}`}>
            <h3>{producto.name}</h3>
        </Link>
        <p className="model-color">
            {producto.model} {producto.color}
        </p>
        <div className="price">
            <p>${Intl.NumberFormat("es-AR").format(producto.price)}</p>
        </div>
        <p className="quantity">
            ({quantity === 1 ? `${quantity} unidad` : `${quantity} unidades`})
        </p>
        </li>
        <li className="box-delete">
        <button
            className="btn-delete"
            onClick={() => removeFromCart(producto.id)}
        >
            Eliminar
        </button>
        </li>
    </CardStyled>
    );
};