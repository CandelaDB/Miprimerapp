import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import SunflowerIcon from '../SunflowerIcon/SunflowerIcon';
import {NavLink } from 'react-router-dom';
import React from 'react';


const NavBar = () => { 

    return(
    <nav>
        <div className="navigation-menu">
            <ul>
                <li>
                    <SunflowerIcon />
                </li>
                <NavLink to="/category/Productos" className = {({isActive}) => isActive ? 'navActiveItem' : 'navItem'}>Productos</NavLink>
                <NavLink to="/category/Kits" className = {({isActive}) => isActive ? 'navActiveItem' : 'navItem'}>Kits</NavLink>
                <li className="Icon">
                    <CartWidget />
                </li>
            </ul>
        </div>
    </nav>
    )

}


export default NavBar 