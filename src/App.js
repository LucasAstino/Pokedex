import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import PokeCard from "./pokeCard.js";

export default function App() {
  const color = "";
  const [pokemonList, setpokemonList] = useState([]);

  useEffect(() => pokemons(), []);

  const pokemons = () => {
    var endpoints = [];
    for (let i = 1; i <= 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    // console.log(endpoints);

    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setpokemonList(res));

    var tipo = "";

    const types = (tp) => {
      pokemonList.map((pokemon, key) => {
        tp = pokemon.data.types[0].type.name;

        console.log(tp);

        switch (tp) {
          case "fire":
            color.push("red");
            console.log(color);
            break;
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
        }
      });
    };
    types(tipo)
  };

  {
    console.log(color);
  }

  return (
    <div className="App">
      {console.log(color)}
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
