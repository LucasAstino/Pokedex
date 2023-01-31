import React from "react";
import "./styles.css";

export default function pokeCard(props) {
  // var color = "";
  // var tp = props.color;

  // switch (tp) {
  //   case "fire":
  //     color = document.getElementsByClassName("colorType");
  //     color.style.color = "red";
  //     break;
  // }

  return (
    <div class="pokeCard">
      <img src={props.image} />
      <span> {props.name}</span>
      <span class="colorType"> {props.type}</span>
    </div>
  );
}
