import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import "./cart.css";
import ProdutoCart from "../ProdutoCart/produtoCart.jsx";
import { useNavigate } from "react-router-dom";
import { carrinho } from "../../Dados";

function Cart() {
  // Itens do carrinho
  const [cartItems, setCartItens] = useState([]);

  let [show, setShow] = useState(false);
  useEffect(function () {
    // monitora evento openSidebar
    window.addEventListener("openSidebar", function () {
      // Faz isso
      setShow(true);
    });
    setCartItens(carrinho);
  }, []);

  // Transição entre telas sem refresh
  const navigate = useNavigate();
  function checkout() {
    navigate("/checkout");
  }

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
        {cartItems.map(function (item) {
          return (
            <ProdutoCart
              key={item.id}
              id={item.id}
              nome={item.nome}
              preco={item.preco}
              foto={item.foto}
              qtd={item.qtd}
            />
          );
        })}
      </div>

      <div className="footer-cart">
        <div className="footer-cart-total">
          <span>Total</span>
          <span>
            <strong>R$ 250,00</strong>
          </span>
        </div>

        <div>
          <button onClick={checkout} className="btn-checkout">
            Finalizar Pedido
          </button>
        </div>
      </div>
    </Dock>
  );
}
export default Cart;
