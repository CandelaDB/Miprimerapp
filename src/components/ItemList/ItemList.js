import Item from "../Item/Item"
import React, { useContext, useEffect, useState } from 'react';


const ItemList = ({allProducts}) => {
    return(
        
                <div>{
                allProducts.map(products => <Item key={products.id} {...products}/>
                )}
            </div>

    
    )
}



export default ItemList