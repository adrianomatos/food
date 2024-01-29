import "./produtoCart.css";
import { useState } from "react";
// import foto from "../../Assets/hamburguer.png";

function ProdutoCart(props) {
  let [valor, setValor] = useState(1);

  function Soma() {
    setValor(valor + 1);
  }
  function Subtrai() {
    setValor(valor - 1);
  }

  return (
    <div className="produto-cart-box" >
      <img src={props.foto} alt="Foto produto" />

      <div className="descricao">
        <p className="produto-cart-nome">{props.nome}</p>
        <p className="produto-cart-valor">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.preco)}
        </p>

        <div className="footer-produto-cart">
          <div>
            <button className="footer-produto-btn" onClick={Subtrai}>
              -
            </button>
            <span className="footer-produto-qtd"> {props.qtd} </span>
            <button className="footer-produto-btn" onClick={Soma}>
              +
            </button>
          </div>

          <p className="footer-produto-total">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.preco * props.qtd)}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProdutoCart;
