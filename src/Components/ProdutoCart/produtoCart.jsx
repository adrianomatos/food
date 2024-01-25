import "./produtoCart.css";
import { useState } from "react";
import foto from "../../Assets/hamburguer.png";

function ProdutoCart() {
  let [valor, setValor] = useState(1);

  function Soma() {
    setValor(valor + 1);
  }
  function Subtrai() {
    setValor(valor - 1);
  }

  return (
    <div className="produto-cart-box">
      <img src={foto} alt="Foto produto" />

      <div className="descricao">
        <p className="produto-cart-nome">Adriano Burguer</p>
        <p className="produto-cart-valor">R$ 18,00</p>

        <div className="footer-produto-cart">
          <div>
            <button className="footer-produto-btn" onClick={Subtrai}>
              -
            </button>
            <span className="footer-produto-qtd"> {valor} </span>
            <button className="footer-produto-btn" onClick={Soma}>
              +
            </button>
          </div>

          <p className="footer-produto-total">R$ {valor * 18.0},00</p>
        </div>
      </div>
    </div>
  );
}
export default ProdutoCart;
