import { Login } from "./Login/Login";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import styled from "styled-components";

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const Profile = () => {
    return (
    <ProfileContainer>
        <Login />
        <ShoppingCart />
    </ProfileContainer>
    );
};