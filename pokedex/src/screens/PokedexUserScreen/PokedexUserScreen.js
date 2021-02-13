import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom"
import Header from '../../componentes/Header/Header'
import PokemonCard from '../../componentes/PokemonCard/PokemonCard'
import GlobalStateContext from '../../global/GlobalStateContext'
import { PokeListContainer } from './styled'
import { goToHomeScreen } from '../../routers/Conductor'

const PokedexUserScreen = () => {

    const { pokedex } = useContext(GlobalStateContext)
    const history = useHistory()

    return (
        <>
            <Header />
            <PokeListContainer>
                {pokedex &&
                    pokedex.map((poke) => {
                        return <PokemonCard 
                                    key={poke.name}
                                    poke={poke}
                                />
                    })}
            </PokeListContainer>
        </>
    )
}

export default PokedexUserScreen;