import React from "react";
import {
  PokemonImage,
  CardContainer,
  PriceContainer,
  PriceText,
  NameText
} from "./styled";

const PokemonCard = (props) => {
    return (
        <CardContainer>
            <PokemonImage 
            src={props.poke && props.image}
            alt={props.name}
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