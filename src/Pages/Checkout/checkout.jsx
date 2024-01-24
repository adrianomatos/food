// import "./checkout.css";
import { useState } from "react";

function Checkout() {
  let [valor, setValor] = useState(0);

  function Soma() {
    setValor(valor++);
  }

  return (
    <>
      <h1>Checkout...</h1>
      <h1>{valor}</h1>
      <button onclick={Soma}>+1</button>
    </>
  );
}

export default Checkout;
