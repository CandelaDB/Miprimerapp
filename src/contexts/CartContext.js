import { useState, createContext, useContext } from "react";
import { Toaster } from "../components/extras/Extras";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

  //añadir al carrito
    const addToCart = (producto, quantity) => {
    //verificar si el producto existe en el carrito
    if (isInCart(producto.id)) {
      const newCart = [...cart]; //hacemos copia de producto
        newCart.forEach((i) => {
        //busco cual producto del carrito concide con el producto
        if (i.producto.id === producto.id) {
            if (i.quantity + quantity <= producto.stock) {
            notify(quantity);
            i.quantity += quantity;
            } else if (producto.stock === i.quantity) {
            return Toaster(
                "error",
                "No hay stock disponible"
            );
            } else {
            return Toaster(
                "warning",
                `Solo hay disponible ${
                producto.stock - i.quantity
                } unidades de este producto`
            );
            }
        }
        });
        setCart(newCart);
    } else {
        setCart([...cart, { producto: producto, quantity: quantity }]);
        notify(quantity);
    }
    };

  //Notifica cuantos elemento se agregaron al carrito
    const notify = (numCounter) => {
    if (numCounter > 0) {
        return Toaster(
        "success",
        `${
            numCounter === 1
            ? `Se agrego ${numCounter} producto`
            : `Se agregaron ${numCounter} productos`
        } al carrito!`
        );
    }
    };

  // verifica si esta en el carrito
    const isInCart = (id) => {
    return cart.find((i) => i.producto.id === id);
    };

  //limpair carrito
    const clearCart = () => setCart([]);

  //Eliminar un producto del carrito
    const removeFromCart = (id) => {
    const newCart = [...cart].filter((i) => i.producto.id !== id);
    setCart(newCart);
    };

  //cantidad total de productos,
    const getQuantity = () => {
    let cantidad = 0;
    cart.forEach((item) => (cantidad = cantidad + item.quantity));
    return cantidad;
    };

  //Multiplicar precio segun la cantidad
    const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.quantity * item.producto.price;
    });
    return Intl.NumberFormat("es-AR").format(total);
    };

  //Funciones globlales del carrrito
    const functionContext = {
    clearCart,
    addToCart,
    isInCart,
    removeFromCart,
    getQuantity,
    getTotal
    };

    return (
    <CartContext.Provider value={{ cart, functionContext }}>
        {children}
    </CartContext.Provider>
    );
};