import styled from "styled-components";

export const CounterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid grey;
    border-radius: 0.25rem;
    width: 100%;
    margin: auto;
    margin: ${(props) => (props.stock === 0 ? "0rem" : "0.5rem")};
    visibility: ${(props) => (props.stock === 0 ? "hidden" : "visible")};
`;