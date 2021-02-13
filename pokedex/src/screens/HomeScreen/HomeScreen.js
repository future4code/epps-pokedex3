import React, { useContext } from "react";
import GlobalStateContext from '../../global/GlobalStateContext.js'
import { PokeListContainer } from './styled';
import PokemonCard from "../../componentes/PokemonCard/PokemonCard";
import Header from '../../componentes/Header/Header'
import { useHistory } from "react-router-dom"


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
                        {pokemons.map((poke) => {
                            return <PokemonCard 
                            name={poke.name} 
                            key={poke.name} 
                            poke={poke} 
                        /> 
                        })}
                    </div>
                )
            })}  
        </PokeListContainer>
        {console.log(pokemons)}
        </>
    )
}

export default HomeScreen;