import React from "react";
import "./App.css";
import Addtask from "./Components/Addtask";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./Components/ListTask";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>To Do List App </h1>
      <br />
      <Addtask />
      <List />
    </div>
  );
}

export default App;
