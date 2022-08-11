import styled from "styled-components";

const Button = styled.button`
    width: 120px;
    position: relative;
    padding: 1rem;
    border: 1px solid #fff2f2e1;
    background-color: #060606e3;
    color: #fff2f2e1;
    font-size: 0.9rem;
    white-space: nowrap;
    border-radius: 0.25rem;
    transition: 0.1s linear;
    cursor: pointer;
    &:hover {
    box-shadow: 0 1px 1px 0px rgba(5, 5, 5, 0.5);
    }
    &:active {
    box-shadow: none;
    }
`;

export default Button;