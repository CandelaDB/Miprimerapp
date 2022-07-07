import React from 'react';
import '../estilos.css';
import {Link } from 'react-router-dom';


export const Navbar = () => {

    const categorias = [
        {id: 'jahsgbd', address:'/category/Shampoo', text: 'Shampoo' },
        {id: 'jahsfrdsgbd', address:'/category/Acondicionador', text: 'Acondicionador' },
        {id: 'rtgjahsgbd', address:'/category/Aceites', text: 'Aceites' },
        {id: 'sgbd', address:'/category/Kit', text: 'Kit' },
    ];

return (
    <section className='navbar navbar-expand-lg navbar-light'><div className='container-fluid'><a className='navbar-brand iconoMenu' href='#'>AURA</a></div>
    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
    </button>
        {categorias.map((cat) => {
        return (
        <div className='collapse navbar-collapse dMenu'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 menu'>
                <li className='nav-item dMenu menuS'>
                    <Link className= 'nav-link aA' aria-current='page' to={cat.address} key={cat.id}>{cat.text}
                    </Link>
                </li>
            </ul>
        </div>
        );
})}
    </section>
);
};