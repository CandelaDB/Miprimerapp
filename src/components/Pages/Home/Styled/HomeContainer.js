import styled from "styled-components";

export const HomeContainer = styled.div`
    margin: 12rem auto 0;
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .Home-left {
    width: 10%;
    margin: auto 0;
    h3 {
        position: relative;
        height: 75vh;
        min-height: 25rem;
        overflow: hidden;
        color: #bf3f43;
    }
    }
    .Home-center {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 60px;
    img {
        max-width: 100%;
        width: 650px;
        height: auto;
        margin: auto;
        z-index: 1;
    }
    h2 {
        font-size: 3rem;
        margin-top: 2rem;
    }
    h3 {
        font-size: 24px;
        color: #bf3f43;
        letter-spacing: 1px;
    }
    .center-btn {
        position: relative;
        top: 50px;
        .see-more {
        text-decoration: none;
        font-size: 16px;
        color: #bf3f43;
        white-space: nowrap;
        &:hover {
            background: #bf3f43;
            color: #fff;
            border: 1px solid #bf3f43;
        }
        }
        &::after {
        content: "";
        width: 50px;
        height: 1px;
        background: #bf3f43;
        position: absolute;
        top: 8em;
        left: 50%;
        transform: translateX(-50%) rotate(-90deg);
        }
    }
    }
    
    @media (max-width: 900px) {
    margin: 8rem auto;
    flex-direction: column;
    .Home-left {
        width: 100%;
        margin-bottom: 5rem;
        h3 {
        transform: rotate(0deg);
        }
    }

`;