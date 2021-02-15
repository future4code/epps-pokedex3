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

    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
        GlobalStateContext
    )

    const AddToPokedex = () => {
        const pokeIndex = pokemons.findIndex(
            (item) => item.name === props.poke.name
        )
        const newPokeList = [...pokemons]
        newPokeList.splice(pokeIndex, 1)
        const orderedPokemons = newPokeList.sort((a, b) => {
            return a.id = b.id
        })

        const newPokedexList = [...pokedex, props.poke]
        const orderedPokedex = newPokedexList.sort((a, b) => {
            return a.id - b.id
        })

        setPokedex(orderedPokedex)
        setPokemons(orderedPokemons)
    }

    return (
        <CardContainer>
            <PokemonImage 
            src={props.poke && props.poke.sprites.front_default}
            alt={props.poke.name}
            />

            <NameText>{props.name}</NameText>
            <PriceContainer>
                <ButtonsContainer>
                    <button onClick={AddToPokedex}>Adicionar a Pokedex</button>
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