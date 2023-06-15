import React from "react";
import FlowersService from "./API/FlowersService";

function App() {
  console.log(FlowersService.getFlowers());
  return <div className="App"></div>;
}

export default App;
