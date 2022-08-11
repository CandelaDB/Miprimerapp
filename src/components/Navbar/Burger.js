import styled from "styled-components";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const BurgerContainer = styled.div`
    display: none;
    font-size: 30px;
    color: #bf3f43;
    padding: 8px 8px 0 8px;
    border-radius: 100px;
    z-index: 400;
    cursor: pointer;
    :first-child:hover {
    opacity: 0.5;
    }
    @media (max-width: 991px) {
    display: inline-block;
    }
`;

export const Burger = ({ openNav, handleClick }) => {
    return (
    <BurgerContainer className="nav-mobile" onClick={handleClick}>
        {openNav ? (
        <IoMdClose style={{ color: "#fff" }} />
        ) : (
        <HiOutlineMenuAlt2 />
        )}
    </BurgerContainer>
    );
};