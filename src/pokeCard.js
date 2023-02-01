import React, { useEffect, useState } from "react";
import "./styles.css";

export default function pokeCard(props) {
  useEffect(() => change(props.type));
  const [cor, setCor] = useState("blue");

  const change = (tipo) => {
    switch (tipo) {
      case "fire":
        setCor("red");
        break;
      case "grass":
        setCor("#008000");
        break;
      case "water":
        setCor("#00CED1");
        break;
      case "bug":
        setCor("#DAA520");
        break;
      case "normal":
        setCor("black");
        break;
      case "poison":
        setCor("#4B0082");
        break;
      case "electric":
        setCor("#FFFF00");
        break;
      case "fairy":
        setCor("#FF1493");
        break;
      case "ground":
        setCor("#808080");
        break;
    }
  };

  return (
    <div id="card">
      <div id="pokeCard">
        <img src={props.image} />
        <span> Nome: {props.name}</span>
        <div class="type">
          <div style={{ backgroundColor: `${cor}` }} class="ball"></div>
          <span class="colorType">{props.type}</span>
        </div>
      </div>
    </div>
  );
}
