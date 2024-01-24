// import "./checkout.css";
import { useState } from "react";

function Checkout() {
  let [valor, setValor] = useState(0);

  function Soma() {
    setValor(valor + 1);
  }
  function Subtrai() {
    setValor(valor - 1);
  }

  return (
    <>
      <h1>Checkout...</h1>
      <h1>{valor}</h1>
      {/* console.log(valor); */}
      <button onClick={Soma}>+1</button>
      <button onClick={Subtrai}>-1</button>
    </>
  );
}

export default Checkout;
