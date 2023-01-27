import React from "react";
import "./styles.css";

export default function pokeCard(props) {
  return (
    <div class="pokeCard">
      <img src={props.image} />
      <span> {props.name}</span>
      <span> {props.type}</span>
    </div>
  );
}
