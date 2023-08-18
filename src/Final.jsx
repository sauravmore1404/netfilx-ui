import React from "react";
import App from "./App";
import Sdata from "./Sdata";

function Final() {
  function ncard(val) {
    return <App imgsrc={val.imgsrc} link={val.link} key={val.id} />;
  }

  return Sdata.map(ncard);
}
export default Final;
