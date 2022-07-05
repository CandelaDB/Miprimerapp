import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

export const ItemDetail = ({
    id, 
    nombre, 
    descripcion,
    category, 
    mililitros, 
    imagen, 
    precio,
}) => {
    return (
        <div className='detail-row'>
            <img src={toBeRequired(`../assets/${imagen}`)} alt={`${id}-${nombre}`} className='flex-col'/>
            <section className='flex-col'>
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
                <h2>{precio}</h2>
            </section>
        </div>
    );
};