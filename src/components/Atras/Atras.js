import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

const AtrasStyle = styled.button`
    text-decoration: none;
    background: transparent;
    font-size: 30px;
    position: absolute;
    border: none;
    top: 15px;
    left: 15px;
    cursor: pointer;
    z-index: 10;
    a {
    color: #fff2f2e1;
    }
`;

export const Atras = ({ link }) => {
    return (
    <Tooltip title="Volver">
        <AtrasStyle>
        <Link to={link} className="atras">
            <FiArrowLeft />
            </Link>
        </AtrasStyle>
    </Tooltip>
    );
};