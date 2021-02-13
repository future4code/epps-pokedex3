import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  TypeAndMovesContainer,
  PokeInfosContainer,
  ImgWrapper,
  ImagesContainer,
  StatsContainer,
  TitleContainer,
  TypesContainer,
  MovesContainer
} from "./styled";
import Header from "../../componentes/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";

const DetailScreen = () => {

    const [selectedPokemon, setSelectedPokemon] = useState({});
    const history = useHistory();
    const { pokemons } = useContext(GlobalStateContext)
    const { name, telaPokedex } = useParams();

    useEffect(() => {
        let current = [];
        // if (telaPokedex) {
        //   current = pokedex.find((item) => {
        //     return item.name === name;
        //   });
        // } else {
        //   current = pokemons.find((item) => {
        //     return item.name === name;
        //   });
        // }

        current = pokemons.find((item) => {
            return item.name === name;
        });
    
        setSelectedPokemon(current);
        console.log(current);
      }, []);

    return (
        <div>
            <Header />
            <PokeInfosContainer>
                <ImgWrapper src={selectedPokemon?.sprites?.front_default} />
                <h1>Nome: {selectedPokemon.name}</h1>

                 <h2>Poderes</h2>
                <div>
                    {selectedPokemon &&
                    selectedPokemon?.stats?.map((stat) => {
                        return (
                        <p key={stat?.stat?.name}>
                            <strong>{stat?.stat?.name}: </strong>
                            {stat?.base_stat}
                        </p>
                        );
                })}
                </div>
                
             
              <h2>Tipos</h2>
              <div>
                {selectedPokemon &&
                    selectedPokemon?.types?.map((type) => {
                    return <p key={type?.type?.name}>{type?.type?.name}</p>;
                    })}
              </div>
              

                <h2>Principais Ataques</h2>
                <div>
                    {selectedPokemon &&
                    selectedPokemon?.moves?.map((move, index) => {
                    return (
                        index < 5 && <p key={move?.move?.name}>{move?.move?.name}</p>
                    );
                    })}
                </div>
            </PokeInfosContainer>
        </div>
    )
}

export default DetailScreen;

// {selectedPokemon &&
//     selectedPokemon.stats.map((stat) => {
//         return (
//             <p key={stat.stat.name}>
//                 <strong>{stat.stat.name}: </strong>
//                 {stat.base_stat}
//             </p>
//         )
// })}
// {selectedPokemon &&
// selectedPokemon.types.map((type) => {
//   return <p key={type.type.name}>{type.type.name}</p>;
// })}