import React from 'react';
import '../Navbar/navbar.css';
import {Link } from 'react-router-dom';
import { DEFAULT_BREAKPOINTS } from 'react-bootstrap/esm/ThemeProvider';


export const Navbar = () => {

    const categorias = [
        {id: 'jahsgbd', address:'/category/Shampoo', text: 'Shampoo' },
        {id: 'jahsfrdsgbd', address:'/category/Acondicionador', text: 'Acondicionador' },
        {id: 'rtgjahsgbd', address:'/category/Aceites', text: 'Aceites' },
        {id: 'sgbd', address:'/category/Kit', text: 'Kit' },
    ];

return (
    <section className='navBar'>
        <div className='logo'><a href='#'>AURA</a></div>
        <div className='barraMenu'>
            <ul className=''>
                <li className=''><a href='#'>PRODUCTOS</a>
                <ul>
                {categorias.map((cat) => {
                    return (
                    <li><Link className= 'nav-link aA' aria-current='page' to={cat.address} key={cat.id}>{cat.text}
                    </Link></li>
                            );
                        })}
                    </ul></li>
                <li className=''><a href='#'>SERVICIOS</a></li>
                <li className=''><a href='#'>GALERIA</a></li>
                <li className=''><a href='#'>CONSULTAS</a></li>
                </ul>
                </div>
    </section>
);
};

export default Navbar;