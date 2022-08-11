import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import { CounterIcon } from "./CounterIcon";
import { AddProduct } from "./AddProduct";
import { CounterContainer } from "./Styled/CounterContainer";
import { CounterWrapper } from "./Styled/CounterWrapper";

export const Counter = ({ stock, cardDate }) => {
    const [numCounter, setNumCounter] = useState(1);
  const [btnAddProduct, setBtnAddProduct] = useState(false); //Estado del boton para agregar al carrito

    const addProduct = () => {
    if (numCounter < stock) {
        setNumCounter(numCounter + 1);
    }
    };

    const SubtractProduct = () => {
    if (numCounter > 1) {
        setNumCounter(numCounter - 1);
    }
    };

    return (
    <CounterContainer>
        {!btnAddProduct ? (
        <CounterWrapper stock={stock}>
            <CounterIcon Icon={<GrSubtract onClick={SubtractProduct} />} />
            <h4>{numCounter}</h4>
            <CounterIcon Icon={<GrAdd onClick={addProduct} />} />
        </CounterWrapper>
        ) : (
        ""
        )}

        <AddProduct
        stock={stock}
        cardDate={cardDate}
        numCounter={numCounter} //state
        btnAddProduct={btnAddProduct} //setState
        setBtnAddProduct={setBtnAddProduct} //setState
        />
        <p className="stock">Stock disponible: {stock}</p>
    </CounterContainer>
    );
}; 