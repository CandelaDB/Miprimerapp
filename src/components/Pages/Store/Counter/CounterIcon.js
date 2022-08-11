import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
    opacity: 0.5;
    }
`;

export const CounterIcon = ({ Icon }) => {
    return <ButtonContainer>{Icon}</ButtonContainer>;
};