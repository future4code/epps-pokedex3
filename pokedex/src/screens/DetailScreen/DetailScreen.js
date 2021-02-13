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

const DetailScreen = () => {

    const [selectedPokemon, setSelectedPokemon] = useState({});

    return (
        <div>
            <Header />
            Detalhes
        </div>
    )
}

export default DetailScreen;