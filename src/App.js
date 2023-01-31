import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import PokeCard from "./pokeCard.js";

export default function App() {
  const [pokemonList, setpokemonList] = useState([]);

  useEffect(() => pokemons(), []);

  const pokemons = () => {
    var endpoints = [];
    for (let i = 1; i <= 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setpokemonList(res));

    //       // case "grass":
    //       //   tp = green;
    //       //   break;
    //       // case "water":
    //       //   tp = blue;
    //       //   break;
    //       // case "bug":
    //       //   tp = inceto;
    //       //   break;
    //       // case "normal":
    //       //   tp = black;
    //       //   break;
    //       // case "poison":
    //       //   tp = purple;
    //       //   break;
    //       // case "electric":
    //       //   tp = roxo;
    //       //   break;
    //       // case "fairy":
    //       //   tp = gay;
    //       //   break;
    //       // case "ground":
    //       //   tp = lutador;
    //       //   break;
  };

  return (
    <div className="App">
      {pokemonList.map((pokemon, key) => (
        <PokeCard
          name={pokemon.data.name}
          image={pokemon.data.sprites.front_default}
          type={pokemon.data.types[0].type.name}
        />
      ))}
    </div>
  );
}
