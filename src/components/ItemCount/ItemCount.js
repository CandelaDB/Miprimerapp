import { useContext, useEffect, useState } from "react"; 
//import { CartContext } from "../context/CartContext";
import "./Count.css";

const ItemCount = ({ onAdd}) => {
    const initial = 1;
    const stock = 5;
    const [count, setCount] = useState(initial);

    useEffect(() => {
        console.log("[useEffect] el componente se agrego");
    }, []);

    useEffect (() => {
        console.log("[useEffect] el estado cambio");
    }, [count]);

    const addHandLer = () => {
        console.log("Se esta sumando");
        setCount(count + 1);
    };
    const removeHandLer = () => {
        console.log("Se esta restando");
        if (count > 1) setCount(count -1);
    };
};

    return (
        <>
        <div className="Itemcount">
            <div className="Itemcount-add">
                <button className="removeButton" onClick={removeHandLer}>
                    {" "}
                    -{" "}
                </button>
                <strong className="count"> {count} </strong>
                <button className="addButton"onClick= {addHandLer} 
                disabled={ count === stock ? true : null}
                >
                    {" "}
                    +{" "}
                </button>
            </div>
            <button className="addCarrito" onClick={() => onAdd(count)}>
                {" "}
                Agregar al carrito{" "}
            </button>
        </div>
        </>
    );

export default ItemCount;






