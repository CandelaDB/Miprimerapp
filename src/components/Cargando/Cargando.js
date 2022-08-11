import styled from "styled-components";

const CargandoContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
    span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: #bf3f43;
    }
    .cargand {
    position: relative;
    width: 100px;
    height: 100px;
    }
    .cargando:before,
    .cargando:after {
    content: "";
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
    }
    .cargando:after {
    box-shadow: 0 2px 0 #ff3d00 inset;
    animation: rotate 2s linear infinite;
    }
    @keyframes rotate {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`;

export const Cargando = () => {
    return (
    <CargandoContainer>
        <span className="cargando">Cargando</span>
    </CargandoContainer>
    );
};