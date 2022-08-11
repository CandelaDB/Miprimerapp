import { ButtonStyled } from "./Styled/BotonStyled";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../contexts/CartContext";

export const AddProduct = ({
    stock,
    cardDate,
    numCounter,
    btnAddProduct,
    setBtnAddProduct
}) => {
    const { cart, functionContext } = useCartContext();
    const { addToCart } = functionContext;
  //Funcion que pasa los datos del boton finalizar compra al carrito
    const onAdd = () => {
    addToCart(cardDate, numCounter);
    stateBtn();
    };
    const goToCart = () => {
    setTimeout(() => {
      setBtnAddProduct(true); //Renderiza el boton finalizar compra
    }, 1000);
    };
    const stateBtn = () => {
    const producto = cart.filter((i) => i.producto.id === cardDate.id); //Se obtiene el producto seleccionado.
    !producto.length
        ? goToCart()
        : producto.forEach((i) => {
            const n = numCounter + i.quantity;
            if (n <= cardDate.stock) {
            return goToCart();
            } else if (i.quantity === cardDate.stock) {
            return goToCart();
            }
        });
    };

    const btn = (
    <ButtonStyled stock={stock} onClick={onAdd}>
        {stock > 0 ? "Agregar al carrito" : "No hay stock"}
    </ButtonStyled>
    );

    return btnAddProduct && numCounter > 0 ? (
    <Link to="/shoppingList" style={{ width: "100%" }}>
        <ButtonStyled btnAddProduct={btnAddProduct} className="goToCart">
        Ir al carrito
        </ButtonStyled>
    </Link>
    ) : (
    btn
    );
};