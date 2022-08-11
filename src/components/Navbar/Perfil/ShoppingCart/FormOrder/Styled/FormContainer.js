import styled from "styled-components";

export const FormContainer = styled.div`
    display: block;
    width: 100%;
    margin: auto;
    position: absolute;
    top: 50%;
    left: ${(props) => (props.showForm ? "50%" : "150%")};
    transform: translate(-50%, -50%);
    visibility: ${(props) => (props.showForm ? "visible" : "hidden")};
    transition: all 0.8s linear;
    h3 {
    text-align: center;
    font-size: 42px;
    color: #fff;
    -webkit-text-stroke: 1px #000;
    margin-top: 1rem;
    margin-bottom: 2rem;
    }
    .box-form {
    position: relative;
    background: #fff;
    width: fit-content;
    min-height: 300px;
    border-radius: 0.25rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    }
    form {
    max-width: 500px;
    h4 {
        color: darkgrey;
        font-size: 14px;
        margin-top: 1rem;
        text-align: center;
    }
    .btn-submit {
        width: 100%;
        font-weight: bold;
        border-radius: 0.25rem;
        color: #3f43bf;
        background: transparent;
        border: 2px solid #3f43bf;
        &:hover {
        color: #fff;
        background: #3f43bf;
        }
    }
    }
    .box-footer {
    position: relative;
    bottom: -10px;
    text-align: center;
    button {
        width: 120px;
        font-weight: bold;
        color: #3f43bf;
        background: transparent;
        border: 2px solid #3f43bf;
        &:hover {
        background: #3f43bf;
        color: #fff;
        }
    }
    }
`;