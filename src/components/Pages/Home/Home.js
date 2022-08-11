import { HomeContainer } from "./Styled/HomeContainer";
import ShoesJOrdan from "../../../Assets/image/Jordan01.png";
import Button from "../../../StyledDefault/Button";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
    <HomeContainer>
        <div className="Home-left">
        <h3>Tenemos todo lo que necesitas para seguir luciendo y sintiéndote increíble cada día.</h3>
        </div>
        <div className="Home-center">
        <img src={ShoesJOrdan} alt="zapatillas Jordan 01" />
        <h2> ¡Te estamos esperando!</h2>
        <h3>Nuestras puertas estan abiertas.</h3>
        <div className="center-btn">
            <Link to="/store">
            <Button className="see-more">COMPRAR</Button>
            </Link>
        </div>
        </div>
    </HomeContainer>
    );
};