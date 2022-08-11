import styled from "styled-components";

export const ShoppingContainer = styled.div`
    position: relative;
    max-width: 780px;
    margin: auto;
    display: flex;
    overflow: hidden;
    .box-listShopping {
    width: 100%;
    position: relative;
    right: ${(props) => (props.showForm ? "100%" : "0%")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    visibility: ${(props) => (props.showForm ? "hidden" : "visible")};
    transition: all 0.8s linear;
    .list-title {
        font-size: 42px;
        text-align: center;
        margin-bottom: 2rem;
        color: #fff;
        -webkit-text-stroke: 1px grey;
    }
    .box-items {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        min-height: 50vh;
        background: #fff;
        border-radius: 0.25rem;
        padding: 0.5rem;
        margin-bottom: 5rem;
        p.cart-empty {
        position: absolute;
        color: lightgrey;
        top: 50%;
        transform: translateY(-50%);
        }
    }
    .total {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        position: absolute;
        bottom: 8vh;
        right: 0;
        p {
        width: fit-content;
        padding: 0.2rem 0.8rem;
        margin: 0.5rem;
        background: green;
        color: #fff;
        border-radius: 0.25rem;
        }
    }
    }
    .cart-footer {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn.goStore {
        button {
        width: auto;
        background: transparent;
        color: green;
        font-weight: bold;
        border: 2px solid green;
        border-radius: 0.25rem;
        &:hover {
            background: green;
            color: #fff;
        }
        }
    }
    .btn.clearCart {
        width: auto;
        font-weight: bold;
        background: transparent;
        color: #bf3f43;
        border: 2px solid #bf3f43;
        &:hover {
        background: #bf3f43;
        color: #fff;
        }
    }
    .quantity {
        display: flex;
        align-items: center;
        p {
        background: #fff;
        padding: 0.2rem 0.8rem;
        color: #333;
        font-size: 20px;
        border-radius: 0.25rem;
        }
    }
    .btn-buying {
        width: auto;
        font-weight: bold;
        background: transparent;
        color: #3f43bf;
        border: 2px solid #3f43bf;
        &:hover {
        background: #3f43bf;
        color: #fff;
        }
    }
    }
`;