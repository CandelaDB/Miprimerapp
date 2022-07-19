import React from 'react';
import { useContext, useState } from 'react';

import ItemCount from "../ItemCount/ItemCount";
import {data} from "../data/data";
import "./ItemDetail.css";
import { CartContext } from '../context/CartContext';
import {Link} from "react-router-dom";






export const ItemDetail = (props) => {
    const {id, nombre, descripcion, category, mililitros, imagen, precio } = props.item;

    window.scrollTo(0.0)

    const {addToCart} = useContext (CartContext);
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    const onAdd = (count) => {
        setPurchaseCompleted(true);
        addToCart(props.item, count);
    };
    return (
        <div className=''>
            
        <div className='detail-row'>
            <img src={`${imagen}`} alt={`${id}-${nombre}`} className='flex-col'/>
            <section className='flex-col'>
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
                <h2>{precio}</h2>
            </section>
        </div>
        <div className=''> {purchaseCompleted ? (
            <Link to="./cart" className=''>
                Ir a mi carrito
            </Link>
        ) : (
            <ItemCount className="" onAdd={onAdd} />
        )}
                </div>
            </div> 
    );
};

export default ItemDetail;