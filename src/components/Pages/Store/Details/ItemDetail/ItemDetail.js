import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Counter } from "../../Counter/Counter";
import { Cargando, Cargando } from "../../../../Cargando/Cargando";
import { DetailContainer } from "./Styled/DetailContainer";
import { Atras, Atras } from "../../../../Atras/Atras";
import { getProduct } from "../../../../../services/firestore";

export const ItemDetail = () => {
    const { dateId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [cardDate, setCardDate] = useState([]);

    window.scrollTo(0, 0);

    useEffect(() => {
    setTimeout(() => {
        getProduct(dateId)
        .then((data) => {
            setCardDate(data);
            setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, 3000);
    }, [dateId]);

    return isLoading ? (
    <Cargando />
    ) : (
    <DetailContainer>
        <Atras link="/store" />
        <div className="Box-image">
        <img src={cardDate.image2} alt="producto para el cabello" />
        <img src={cardDate.image} alt="producto para el cabello" />
        </div>
        <div className="Box-info">
        <h3 className="name">{cardDate.name}</h3>
        <p className="model-color">
            {cardDate.model} ({cardDate.color})
        </p>
        <h4 className="price">
            ${Intl.NumberFormat("es-AR").format(cardDate.price)}
        </h4>
        <p className="descrip">{cardDate.description}</p>
        <Counter
            className="counter"
            stock={cardDate.stock}
            cardDate={cardDate}
        />
        </div>
    </DetailContainer>
    );
};