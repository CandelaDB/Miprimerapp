import './Navbar.css';

function Navbar() {
    return (
    <header>
        <nav className='navbar'><div className='container-fluid'><a className='iconoMenu' href='#'>AURA</a> </div>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul>
                    <li>
                        <a className='nav-link' aria-current='page' href='#'>INICIO</a>
                    </li>
                    <li>
                        <a className='nav-link' aria-current='page' href='#'>PRODUCTOS</a>
                    </li>
                    <li>
                        <a className='nav-link' aria-current='page' href='#'>RESERVAS</a>
                    </li>
                <li>
                    <a className='nav-link' aria-current='page' href='#'>GALERIA</a>
                </li>
                </ul>
            </div>
    </nav>
    </header> );
}

export default Navbar;