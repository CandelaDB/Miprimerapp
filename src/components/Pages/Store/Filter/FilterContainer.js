import styled from "styled-components";

const FilterContainer = styled.div`
    position: relative;
    margin: 1rem;
    color: grey;
    h3 {
    color: #bf3f43;
    cursor: pointer;
    margin-bottom: 1rem;
    }
    .card-filter {
    width: 150px;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border: 1px solid lightgrey;
    border-radius: 0.25rem;
    z-index: 200;
    .section {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0.5rem;
        border-bottom: 1px solid lightgrey;
    }
    h6 {
        font-size: 12px;
        font-weight: 800;
        color: #bf3f43;
    }
    button {
        background: #fff;
        border: none;
        color: grey;
        font-weight: 600;
        margin: 0.5rem auto;
        cursor: pointer;
        &:hover {
        color: #000;
        }
    }
    button {
        font-size: 12px;
        margin: 1rem;
    }
    .section.color {
        .colors {
        display: flex;
        justify-content: center;
        }
        span {
        width: 20px;
        height: 20px;
        display: flex;
        flex-direction: row;
        border: 2px solid darkgrey;
        border-radius: 50%;
        margin: 0.5rem;
        cursor: pointer;
        }
        span.black {
        background: #000;
        }
        span.white {
        background: #fff;
        }
        span.red {
        background: #bf3f43;
        }
    }
    .section.stock {
        border-bottom: none;
        input {
        margin: 0.5rem;
        }
    }
    }
    @media (max-width: 991px) {
    h3 {
        margin-bottom: 0.5rem;
    }
    .card-filter {
        display: ${(props) => (props.filterModal ? "flex" : "none")};
        position: absolute;
        border-radius: 0 0.25rem 0.25rem;
        box-shadow: 0px 0px 5px 0 rgba(3, 3, 3, 0.3);
    }
    }
`;

export default FilterContainer;