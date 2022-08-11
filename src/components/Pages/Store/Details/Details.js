import styled from "styled-components";
import Button from "../../../../Style/Boton";
import { Link } from "react-router-dom";

const ButtonStyle = styled(Button)`
    position: relative;
    top: 30px;
    padding: 1rem;
    border: none;
    background: #fff;
    border: 1px solid #bf3f43;
    border-radius: 0.25rem;
    white-space: nowrap;
    color: #bf3f43;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
    background: #bf3f43;
    color: #fff;
    }
`;

export const Details = ({ item }) => {
    return (
    <>
        <Link to={`/itemDetail/${item.id}`}>
        <ButtonStyle>Ver más</ButtonStyle>
        </Link>
    </>
    );
};