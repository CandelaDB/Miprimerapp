import { useEffect, useState } from "react";
import StoreContenedor from "./Styled/StoreContenedor";
import ItemsContenedor from "./Styled/ItemsContenedor";
import { Cargando } from "../../Cargando/Cargando";
import { Filter } from "./Filter/Filter";
import { Cards } from "./Cards/Cards";
import { getAllProducts } from "../../../services/firestore";

export const Store = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [producto, setProduct] = useState();
    const [filterProduct, setFilterProduct] = useState();

    useEffect(() => {
    setTimeout(() => {
        getAllProducts()
        .then((data) => {
            setIsLoading(false);
            setProduct(data);
            setFilterProduct(data);
        })
        .catch((err) => console.log(err));
    }, 3000);
    }, []);

    return isLoading ? (
    <Cargando />
    ) : (
    <StoreContenedor>
        <h2 className="title-store">Shampoo</h2>
        <ItemsContenedor>
        <Filter producto={producto} setFilterProduct={setFilterProduct} />
        <ul className="sneakers">
            {filterProduct.map((item) => {
            return <Cards key={item.id} item={item} />;
            })}
        </ul>
        </ItemsContenedor>
    </StoreContenedor>
    );
};