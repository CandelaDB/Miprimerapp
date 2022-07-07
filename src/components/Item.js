import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, category, nombre, descripcion, mililitros, imagen, precio }) => {
    return (
        <Link to={ `/item/${id}`}>
        <div className= { `item_card ${category}-categoria`}>
            <span>{nombre}</span>
            <span> Tipo de producto: {category}</span>
            <span>
                <img src={imagen} alt={nombre} className={'imgGaleria small-img'} />
            </span>
            <span>${precio}</span>
        </div>
        </Link>
    );
};