import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/global.css";
import Rotas from "./Rotas.js";
// Context API p/ informações globais
import { CartProvider } from "./Contexts/cart-context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <Rotas />
  </CartProvider>
);
