import React, { useState, useEffect, useContext } from "react";
import {
  PokemonImage,
  CardContainer,
  PriceContainer,
  NameText,
  ButtonsContainer
} from "./styled";
import GlobalStateContext from '../../global/GlobalStateContext'
import { useHistory } from "react-router-dom";
import { goToDetailsScreen } from "../../routers/Conductor";


const PokemonCard = (props) => {

    const history = useHistory();

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
                <ButtonsContainer>
                    <button>Adicionar a Pokedex</button>
                    <button
                        onClick={() =>
                            goToDetailsScreen(history, props.poke.name)
                          }
                    >Mostrar Detalhes</button>
                </ButtonsContainer>
            </PriceContainer>
        </CardContainer>
    )
}

export default PokemonCard;