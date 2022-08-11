import { Details } from "../Details/Details";

export const Cards = ({ item }) => {
    return (
    <>
        <li key={item.id}>
        <div className="card">
            <div className="imgBox">
            <img className="productos" src={item.image} alt="producto para el cabello" />
            <img className="productos" src={item.image2} alt="producto para el cabello" />
            </div>
            <div className="contentBox">
            <h3 className="name">{item.name}</h3>
            <Details item={item} />
            </div>
        </div>
        </li>
    </>
    );
};