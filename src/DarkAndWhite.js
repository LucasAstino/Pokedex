import React, { Component } from "react";
import "./styles.css";

export default class DarkAndWhite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clima: false,
    };
  }

  toogle = () => {
    document.querySelector("#toogle").classList.toggle("active");
    document.querySelector(".App").classList.toggle("dark");
    document.querySelector("body").classList.toggle("active");
    this.setState({
      clima: !this.state.clima,
    });
  };

  render() {
    return (
      <>
        <div id="toogle">
          <img
            src="https://raw.githubusercontent.com/LucasAstino/LocalStorage_React/3fc44cc76d5b71453db4d4f930b77b17bd5ef91d/src/components/DarkAndWhite/Assets/sun.svg"
            alt="moon"
          />
          <img
            src="https://raw.githubusercontent.com/LucasAstino/LocalStorage_React/3fc44cc76d5b71453db4d4f930b77b17bd5ef91d/src/components/DarkAndWhite/Assets/moon.svg"
            alt="sun"
          />

          <div onClick={() => this.toogle()} id="button"></div>
        </div>
        {/* <img src={this.state.clima ? Sol : Lua} /> */}
      </>
    );
  }
}
