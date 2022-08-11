import styled from "styled-components";

const NavbaContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background: ${(props) => (props.fix ? "#fff" : "transparent")};
    box-shadow: ${(props) => props.fix && "0 0 5px 0 rgba(3,3,3, 0.2)"};
    position: ${(props) => (props.fix ? "sticky" : "relative")};
    top: 0;
    padding: 1rem 3rem;
    margin: auto;
    margin-bottom: 5rem;
    transition: all 0.3s linear;
    z-index: 500;
    .logoAura {
    position: fixed;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    color: #333;
    z-index: 1;
    }
`;

export default NavbaContainer;