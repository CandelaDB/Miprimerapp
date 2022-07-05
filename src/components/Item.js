import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, category, nombre, descripcion, mililitros, imagen, precio }) => {
    return (
        <Link to={`/item/${id}`}>
        <div className= { `item_card ${nombre}-nombre`}>
            <span>{category}</span>
            <span> Cat: {category}</span>
            <span>
                <img src={imagen} alt={nombre} className={'small-img'} />
            </span>
            <span>${precio}</span>
        </div>
        </Link>
    );
};