import React from "react";
import reactDOM from "react-dom";
import Home from "./components/Home";
import "./components/Index.css"; //Tem que ser com a primeira letra maiúscula, sempre, SEMPRE

reactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
