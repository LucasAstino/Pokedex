import React, { useEffect, useState } from "react";
import "./styles.css";

export default function pokeCard(props) {
  useEffect(() => muda(props.type), []);
  const [type, setType] = useState(props.type);
  var tipo;
  const muda = () => {
    var color = Array.from(document.getElementsByClassName("colorType"));
    color.map((tipos) => {
      tipo = tipos.innerHTML;
      // console.log(tipo);
      switch (tipo) {
        case "fire":
          tipos.style.color = "red";
          break;
      }
    });
  };

  return (
    <div class="pokeCard">
      <img src={props.image} />
      <span> {props.name}</span>
      <span class="colorType">{props.type}</span>
    </div>
  );
}
