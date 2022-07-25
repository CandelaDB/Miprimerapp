import React, { createContext, useState0 } from "react";

export const CartContext = createContext ({})

/*Array de carrito*/
const {Provider} = CartContext
const carritoContext = [
    {
        item: {
            nombre: 'Shampoo',
            precio: '$2000',
            id: 1
        },
        quantity: 5
    },
    {
        item: {
        nombre: 'Aceite',
        precio: '$1000',
        id: 2
        },
        quantity: 5
    },
    {
        item: {
            nombre:'Kit',
            precio: '$1800',
            id: 3
        },
        quantity: 5
    }
]

export const CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState0(defaultValue);

/*Para limpiar el carrito*/
    const clearCart = () => {
        setCart([]);
    }



    const addToCart = (item, quantity) => {
        console.log(item)
        if(isInCart(item.id)) {
            const newCart = [...cart]
            for( const element of newCart) {
                if( element.item.id === item.id) {
                    element.quantity = element.quantity + quantity;
                }
            }
            setCart(newCart);
        } else{
            setCart(
                [
                    ...cart,
                    {
                        item: item,
                        quantity : quantity
                    }
                ]
            )
        }
    }

    const isInCart = (id) => {
        return cart.find((element) => element.item.id === id);
    }

    const removeFronCart = (id) => {
        const newCart = [...cart].filter(element => element.item.id !== id);
        setCart(newCart);
    }


    const getQuantity = () => {
        let cantidad = 0
        cart.forEach((element) => cantidad = cantidad + element.quantity)
        return cantidad
    }
    const getTotal = () => {
        let total = 0
        cart.forEach((element) => {
            total = total +(element.quantity * element.item.precio)
        })
        return total
    }

    /*Objeto*/
    const context = {
        cart,
        clearCart,
        addToCart,
        removeFronCart,
        getQuantity,
        getTotal
    }


    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
}