import React from "react";
import Title from "./Title.js";
import Description from "./Description.js";
import logoFileFromSRC from "../logo.svg";

// We don't need to specify the `props` argument as we are not using them in this component
const Header = (props) => {
  return (
    <header className="App-header">
      <img src={logoFileFromSRC} className="App-logo" alt="logo" />

      <Title appTitle="Welcome To React, Jason! " />
      {props.userComponent}
      <Description>You are ready to take this to the next level! </Description>
    </header>
  );
};

export default Header;
