import styled from "styled-components";

export const MenuStyled = styled.ul`
    display: flex;
    margin: 1rem 0;
    li {
    list-style: none;
    margin: 0 1rem;
    }
    .nav-links {
    text-decoration: none;
    color: #bf3f43;
    font-size: 16px;
    transition: 0.1s linear;
    }
    .active {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    transition: border 0.1s;
    }
    @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(2px);
    position: fixed;
    top: -16px;
    left: ${(props) => (props.openNav ? "0" : "-1000px")};
    transition: left 0.5s linear;
    z-index: 300;
    li {
        margin: 3rem;
        a.nav-links {
        font-size: 32px;
        color: #fff;
        }
        .active {
        color: #bf3f43;
        font-size: 32px;
        }
    }
    }
`;