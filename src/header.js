import React, { useEffect, useState } from "react";
import "./styles.css";
import DarkandWhite from "./DarkAndWhite.js";

export default function header(props) {
  var f = props.onchange;
  
  return (
    <header id="header">
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
      <input
        onChange={(e) => f(e.target.value)}
        class="input"
        placeholder="pesquise"
      ></input>
      <DarkandWhite />
    </header>
  );
}
