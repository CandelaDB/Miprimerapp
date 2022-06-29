
import './Navbar.css';

function Navbar() {
    return (
        <>
        <nav className='navbar navbar-expand-lg navbar-light'><div className='container-fluid'><a className='navbar-brand iconoMenu' href='#'>AURA</a></div>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item dMenu'>
                    <a className='nav-link' aria-current='page' href='#'>INICIO</a>
                </li>
                <li className='nav-item dMenu'>
                    <a className='nav-link' aria-current='page' href='#'>PRODUCTOS</a>
                </li>
                <li className='nav-item dMenu'>
                    <a className='nav-link' aria-current='page' href='#'>RESERVAS</a>
                </li>
            <li className='nav-item dMenu'>
                <a className='nav-link' aria-current='page' href='#'>GALERIA</a>
            </li>
            </ul>
        </div>
</nav>
</>
);
}

export default Navbar;