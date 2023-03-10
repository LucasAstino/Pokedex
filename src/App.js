import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import Poke from "./pokeCard.js";

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

    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    //   .then((res) => setpokemonList(res.data.results))
    //   .catch((err) => console.log(err));
    // fetch(api) //   .then((pok) => pok.json()) //   .then((pokemon) => console.log(pokemon));
    // var type = "";
    // var color = "";

    // const types = (tp) => {
    //   pokemonList.map((pokemon) => {
    //     var tp = pokemon.data.types[0].type.name;

    //     console.log(tp);

    //     switch (tp) {
    //       case "fire":
    //         color = "red";
    //         console.log(color);
    //         break;
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
    //     }
    //   });
    // };
    // types(type);
  };

  return (
    <div className="App">
      {pokemonList.map((pokemon, key) => (
        <div class="pokeCard">
          <img src={pokemon.data.sprites.front_default} />
          <Poke name={pokemon.data.name} />
          {/* <span>{pokemon.data.name}</span> */}
        </div>
      ))}
    </div>
  );
}
