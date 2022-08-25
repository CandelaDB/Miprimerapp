import './Item.css';
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';



const Item = ({img , name , price, id}) =>{
    return (
        <div className="cards">
            <img src ={img} alt= {name} width = '200px' height = '200px' />
            <p>{name}</p>
            <p>Precio: $ {price}</p>
            <Link to={`/detail/${id}`} className="Option">
            <button className="allButtons">Ver mas</button>
            </Link>
        </div>
    )
}


export default Item