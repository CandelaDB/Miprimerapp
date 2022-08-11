import { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import { Burger } from "./Burger";
import { SiPalantir } from "react-icons/si";
import { Profile } from "./Perfil/Perfil";
import { Link } from "react-router-dom";
import NavbarContainer from "./Styled/NavbarContainer";
import { MenuStyled } from "./Styled/MenuStyled";
import { Menu } from "./MenuItems";
import styled from "styled-components";

const Logo = styled.div`
    font-size: 48px;
    cursor: pointer;
    transform: translateX(35px);
    .logoLink {
    text-decoration: none;
    color: #bf3f43;
    }
    &:hover {
    opacity: 0.5;
    }
`;

export const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [fix, setFix] = useState(false);

    const setFixed = () => {
    let scrollTop = window.scrollY;
    scrollTop > 50 ? setFix(true) : setFix(false);
    };

    useEffect(() => {
    window.addEventListener("scroll", setFixed);
    return () => window.removeEventListener("scroll", setFixed);
    }, []);

    const handleClick = () => {
    setOpenNav(!openNav);

    const body = document.body;
    openNav
        ? (body.style.overflowY = "visible")
        : (body.style.overflowY = "hidden");
    };

    return (
    <NavbarContainer fix={fix}>
        <Burger openNav={openNav} handleClick={handleClick} />
        <Logo>
        <Link to="/home" className="logoLink">
            <SiPalantir />
        </Link>
        </Logo>
        <SiPalantir className="logoAura" />
        <MenuStyled openNav={openNav}>
        {MenuItems.map((item) => {
            return (
            <Menu
                key={item.id}
                item={item}
                openNav={openNav}
                handleClick={handleClick}
            />
            );
        })}
        </MenuStyled>
        <Profile />
    </NavbarContainer>
    );
};