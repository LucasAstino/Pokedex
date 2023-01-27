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
    console.log(endpoints);

    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setpokemonList(res));

    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    //   .then((res) => setpokemonList(res.data.results))
    //   .catch((err) => console.log(err));
    // fetch(api) //   .then((pok) => pok.json()) //   .then((pokemon) => console.log(pokemon));
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
