import work from "../../../Assets/image/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.webp";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
    color: #000;
    margin-bottom: 1rem;
    }
    img {
    max-width: 100%;
    width: 600px;
    }
`;

export const UnderConstruction = () => {
    return (
    <Container>
        <h3>Página en construcción...</h3>
        <img src={work} alt="Pagina no disponible" />
    </Container>
    );
};