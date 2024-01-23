import React from "react";
import ReactDOM from "react-dom/client";
import Saudacao from "./Components/Saudacao/saudacao.jsx";
import Home from "./Pages/Home/home.jsx";
import "./Style/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* "Envio" de prop nome */}
    <Saudacao nome="Adriano" />
    <Home />
  </>
);
