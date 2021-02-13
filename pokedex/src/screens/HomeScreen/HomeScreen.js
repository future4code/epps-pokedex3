import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import useRequestData from '../../hooks/useRequest.js'
import { ScreenContainer } from './styled';
import { BASE_URL } from '../../constants/urls';
import PokemonCard from "../../componentes/PokemonCard/PokemonCard.js";
import Header from '../../componentes/Header/Header'

const HomeScreen = () => {
    const [pokemonsData] = useRequestData({}, `${BASE_URL}/pokemon/`)
    
    return (
        <div>
            <Header />
            <ScreenContainer>
                {pokemonsData.results && 
                pokemonsData.results.map((pokemon) => {
                    return ( 
                        <PokemonCard
                            key={pokemon.name}
                            poke={pokemon.name}
                            name={pokemon.name}
                        />
                    )
                })}           
            </ScreenContainer>
            
        </div>
    )
}

export default HomeScreen;