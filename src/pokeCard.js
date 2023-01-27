import React from "react";
import "./styles.css";

export default function pokeCard(props) {
  return (
    <>
      <img src={props.image} />
      <span> {props.name}</span>
    </>
  );
}
