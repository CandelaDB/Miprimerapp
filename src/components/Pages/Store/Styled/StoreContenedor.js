import styled from "styled-components";

const StoreContenedor = styled.div`
    margin-top: 2rem;
    text-align: center;
    overflow: hidden;
    transition: all 0.5s linear;
    h2.title-store {
    position: relative;
    width: fit-content;
    text-align: center;
    margin: auto auto 4rem;
    font-size: 20rem;
    font-weight: 900;
    color: #bf3f43;
    z-index: 2;
    &::before {
        content: "CATEGORIA";
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 4rem;
        line-height: 0.5;
        color: #bf3f43;
        z-index: -1;
    }
    &::after {
        content: "PRODUCTO";
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 45%;
        left: 51%;
        transform: translateX(-50%) rotate(-90deg);
        font-size: 3rem;
        line-height: 0.5;
        -webkit-text-stroke: 1px #fff;
        color: transparent;
        z-index: 1;
    }
    }
    @media (max-width: 991px) {
    width: 100%;
    margin: 0;
    margin-top: 4rem;
    }
    @media (max-width: 630px) {
    h2.title-store {
        font-size: 16rem;
        &::after {
        font-size: 2.5rem;
        }
    }
    }
`;
export default StoreContenedor;