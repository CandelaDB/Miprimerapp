import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import FilterContainer from "./FilterContainer";

export const Filter = ({ setFilterProduct, producto }) => {
    const [filterModal, setFilterModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handlerFilter = (keyName, filterName) => {
    const filter = producto.filter((item) => item[keyName] === filterName);
    setFilterProduct(filter);
    };

    const handlerCheked = () => {
    !isChecked
        ? setFilterProduct(producto.filter((item) => item.stock))
        : setFilterProduct(producto.filter((item) => item));
    setIsChecked(!isChecked);
    };

    return (
    <FilterContainer filterModal={filterModal}>
        <h3 onClick={() => setFilterModal(!filterModal)}>
        Filtro <BiFilterAlt />
        </h3>
        <div className="card-filter">
        <div className="section">
            <h6>Ver</h6>
            <button className="all" onClick={() => handlerFilter()}>
            Todos los productos
            </button>
        </div>
        <div className="section name">
            <h6>Categoria</h6>
            <button onClick={() => handlerFilter("model", "Clasico")}>
            Pelo largo
            </button>
            <button onClick={() => handlerFilter("model", "Retro")}>Pelo medio</button>
            <button onClick={() => handlerFilter("model", "Edicion especial")}>
            Pelo corto
            </button>
        </div>
        <div className="section color">
            <h6>Tipo</h6>
            <div className="colors">
            <span
                className="white"
                onClick={() => handlerFilter("color", "blanco")}
            ></span>
            <span
                className="black"
                onClick={() => handlerFilter("color", "negro")}
            ></span>
            <span
                className="red"
                onClick={() => handlerFilter("color", "rojo")}
            ></span>
            </div>
        </div>
        <div className="section stock">
            <h6>En stock</h6>
            <input type="checkbox" checked={isChecked} onChange={handlerCheked} />
        </div>
        </div>
    </FilterContainer>
    );
};