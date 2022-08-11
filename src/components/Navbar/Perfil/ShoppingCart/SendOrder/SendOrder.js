import { useEffect } from "react";
import { useCartContext } from "../../../../../contexts/CartContext";
import { createOrder } from "../../../../../services/firestore";
import Swal from "sweetalert2";
import { Cargando } from "../../../../Cargando/Cargando";

export const SendOrder = ({ buyer, isLoading, setIsLoading }) => {
    const { cart, functionContext } = useCartContext();
    const { getTotal, clearCart } = functionContext;

    const localDate = () => {
    const dateNow = new Date();
    const opciones = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    const date = dateNow.toLocaleDateString("es-AR", opciones);
    return date;
    };

    const orderInfo = {
    buyer: buyer,
    item: cart.map((i) => ({
        id: i.producto.id,
        name: i.producto.name,
        price: i.producto.price,
        quantity: i.quantity
    })),
    total: getTotal(),
    date: localDate()
    };

    useEffect(() => {
    createOrder(orderInfo)
        .then((doc) => {
        OrderAlert(doc.id);
        setIsLoading(false);
        clearCart();
        })
        .catch((err) => {
        setIsLoading(true);
        Swal.fire({
            html: `Hubo un el siguiente error: ${err} <br> Actualice la pagina)`
        });
        });
    }, []);

    const OrderAlert = (id) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Compra finalizada",
        showConfirmButton: true,
        confirmButtonText: "Ir al inicio",
        confirmButtonColor: "#3f43bf",
        html: `Tu orden es <br>#<strong>${id}</strong> <br>Te enviamos el detalle de tu compra a<br> <strong>${buyer.email}`,
        footer: `<small>${localDate()}</small> `,
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
            position: "center",
            imageUrl: "https://aura-matchmaking.com/wp-content/uploads/2020/09/logo-AURA-1.png",
            imageWidth: 20,
            imageHeight: "auto",
            text: `Gracias por comprar en AURA.`,
            footer: "Redirigiendo a  la pagina de inicio...",
            showConfirmButton: false,
            timer: 4000,
            allowOutsideClick: false
        }).then(() => {
            setIsLoading(true);
            return (window.location.href = "/");
        });
        }
    });
    };

    return isLoading && <Cargando />;
};