import React from "react";

function App(props) {
  return (
    <div className="container">
      <img src={props.imgsrc} />
      <a href={props.link} target="_blank">
        <button>Watch</button>
      </a>
    </div>
  );
}
export default App;
