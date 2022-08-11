import { AiOutlineShoppingCart } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../contexts/CartContext";
import styled from "styled-components";

const CartStyled = styled.div`
    position: relative;
    font-size: 24px;
    cursor: pointer;
    z-index: 1;
    a {
    text-decoration: none;
    color: #bf3f43;
    }
    p {
    position: absolute;
    bottom: 20px;
    left: 16px;
    font-size: 10px;
    background: #bf3f43;
    color: #fff;
    padding: 0.2rem 0.4rem;
    border-radius: 10px;
    }
`;

export const ShoppingCart = () => {
    const { functionContext } = useCartContext();
    const { getQuantity } = functionContext;

    return (
    <Tooltip
        title={
        getQuantity() === 0
            ? "El carrito esta vacio"
            : getQuantity() === 1
            ? "1 producto en el carrito"
            : `${getQuantity()} productos en el carrito`
        }
        arrow
        >
        <CartStyled>
        <Link to="/shoppingList/">
            <AiOutlineShoppingCart />
            {getQuantity() >= 1 && <p>{getQuantity()}</p>}
        </Link>
        </CartStyled>
    </Tooltip>
    );
};