import React, { useContext } from "react";
import GlobalStateContext from '../../global/GlobalStateContext.js'
import { PokeListContainer } from './styled';
import PokemonCard from "../../componentes/PokemonCard/PokemonCard";
import Header from '../../componentes/Header/Header'
import { capitalize } from '../../hooks/capitalize'


const HomeScreen = () => {
    const { pokemons } = useContext(GlobalStateContext);


    
    return (
        <>
        <Header />
        <PokeListContainer>
            {pokemons && 
            pokemons.map((pokemon) => {
                return ( 
                    <div>
                        {<PokemonCard 
                                name={capitalize(pokemon.name)} 
                                key={pokemon.name} 
                                poke={pokemon} 
                        />}
                    </div>
                )
            })}  
        </PokeListContainer>
        </>
    )
}

export default HomeScreen;