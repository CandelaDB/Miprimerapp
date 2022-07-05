import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { data } from '../data/data';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});
    const [isLoading, setIsLoading] = useState (true);
    const { iditem } = useParams();

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const myData = data.find((item) => item.id === iditem);

                resolve(myData);
            }, 1000);
        });
        getItems.then((res) => {
            setProduct(res);
            setIsLoading (false);
        });
    }, []);

    return isLoading ? <h1>Loading...</h1> : <ItemDetail {...product} />;
};
