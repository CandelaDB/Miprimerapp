import styled from "styled-components";

export const CardStyled = styled.div`
    position: relative;
    width: 100%;
    min-height: 140px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 0 5px 0px rgb(3 3 3 / 30%);
    margin: 0.3rem 0;
    list-style: none;
    overflow: hidden;
    &::after {
    content: "Nike";
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%) rotate(-20deg);
    font-size: 13rem;
    font-weight: 600;
    color: #f1f1f1;
    opacity: 0.5;
    }
    .box-image {
    position: relative;
    left: 5px;
    width: 150px;
    height: 130px;
    border-right: 1px solid lightgrey;
    display: flex;
    &:hover img {
        transform: scale(1.2) translateY(-40%);
    }
    img {
        position: absolute;
        max-width: 100%;
        top: 70%;
        transform: translateY(-50%);
        padding: 0 0.1rem;
        transition: 0.5s linear;
        z-index: 10;
    }
    }
    .box-info {
    width: fit-content;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 1;
    z-index: 10;
    .quantity {
        color: darkgrey;
        font-size: 16px;
    }
    a {
        text-decoration: none;
        h3 {
        font-size: 24px;
        color: #333;
        }
    }
    .model-color {
        font-size: 14px;
        color: grey;
        margin-bottom: 0.5rem;
    }
    .price {
        margin-bottom: 0.5rem;
        p {
        background: green;
        padding: 0.2rem 0.8rem;
        font-size: 20px;
        font-weight: 300;
        border-radius: 0.25rem;
        color: #fff;
        }
    }
    }
    .box-delete {
    margin: 1.5rem;
    z-index: 10;
    .btn-delete {
        position: absolute;
        bottom: 0;
        right: 0;
        background: transparent;
        border: none;
        color: #bf3f43;
        padding: 16px 24px;
        font-size: 14px;
        font-family: Roboto;
        cursor: pointer;
    }
    }
`;