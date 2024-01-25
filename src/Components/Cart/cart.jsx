import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import "./cart.css";
import ProdutoCart from "../ProdutoCart/produtoCart.jsx";

function Cart() {
  let [show, setShow] = useState(false);

  useEffect(function () {
    // monitora evento openSidebar
    window.addEventListener("openSidebar", function () {
      // Faz isso
      setShow(true);
    });
  }, []);

  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      size={420}
      // ALtera p/ false clicando fora
      onVisibleChange={function (visible) {
        setShow(visible);
      }}
    >
      <div className="text-center">
        <h1>Meu Pedido</h1>
      </div>

      <div className="lista-produtos">
        <ProdutoCart />
        <ProdutoCart />
        <ProdutoCart />
      </div>

      <div className="footer-cart">
        <div className="footer-cart-total">
          <span>Total</span>
          <span>
            <strong>R$ 250,00</strong>
          </span>
        </div>

        <div>
          <button className="btn-checkout">Finalizar Pedido</button>
        </div>
      </div>
    </Dock>
  );
}
export default Cart;
