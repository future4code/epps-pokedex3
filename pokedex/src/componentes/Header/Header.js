import React from 'react';
import { useHistory } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./styled";



const Header = () => {
    return (
        <HeaderContainer>
            <LeftHeaderButton>Ir para Pokedex</LeftHeaderButton>
            <h1>Lista de Pokemons</h1>
        </HeaderContainer>
    )
}

export default Header;