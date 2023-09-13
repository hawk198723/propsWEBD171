import React from "react";

const Title = (props) => {
  return (
    <div>
      <h3>Title:</h3>
      <h1 className="App-title">{props.appTitle}</h1>
    </div>
  );
};

export default Title;
