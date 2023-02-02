import React, { useEffect, useState } from "react";
import "./styles.css";

export default function header(props) {
  var oi = props.onchange;
  return (
    <header>
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
      <input
        onChange={(e) => oi(e.target.value)}
        class="input"
        placeholder="pesquise"
      ></input>
    </header>
  );
}
