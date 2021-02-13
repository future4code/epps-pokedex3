import React, { useState, useEffect, useContext } from "react";
import {
  PokemonImage,
  CardContainer,
  PriceContainer,
  PriceText,
  NameText
} from "./styled";
import GlobalStateContext from '../../global/GlobalStateContext'


const PokemonCard = (props) => {

    const { pokemons, setPokemons } = useContext(
        GlobalStateContext
    )

    return (
        <CardContainer>
            <PokemonImage 
            src={props.poke && props.poke.sprites.front_default}
            alt={props.poke.name}
            />

            <NameText>{props.name}</NameText>
            <PriceContainer>
                <button>Adicionar a pokedex</button>
                <button>Mostrar Detalhes</button>
            </PriceContainer>
        </CardContainer>
    )
}

export default PokemonCard;