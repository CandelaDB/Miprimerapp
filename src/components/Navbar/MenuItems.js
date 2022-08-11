import { NavLink } from "react-router-dom";

export const MenuItems = [
  {
    id: "home",
    title: "Inicio",
    url: "/home",
    cName: "nav-links"
  },
  {
    id: "productos",
    title: "productos",
    url: "/productos",
    cName: "nav-links"
  },
  {
    id: "store",
    title: "Tienda",
    url: "/store",
    cName: "nav-links"
  },
  {
    id: "contact",
    title: "Contacto",
    url: "/contact",
    cName: "nav-links"
  }
];

export const Menu = ({ item, openNav, handleClick }) => {
  return (
    <li>
      <NavLink
        to={item.url}
        className={({ isActive }) => (isActive ? "active" : `${item.cName}`)}
        onClick={openNav ? handleClick : null}
      >
        {item.title}
      </NavLink>
    </li>
  );
};