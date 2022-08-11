import styled from "styled-components";
import Button from "../../../../../Style/Boton";

export const ButtonStyled = styled(Button)`
    width: 100%;
    max-width: 360px;
    margin: auto;
    background: ${(props) =>
    props.stock === 0
        ? "brown"
        : props.btnAddProduct
        ? "#3f43bf"
        : "darkgreen"};
    pointer-events: ${(props) => (props.stock === 0 ? "none" : "auto")};
    font-size: 16px;
    color: #fff;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
    border: none;
    white-space: nowrap;
`;