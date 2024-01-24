import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import "./cart.css";

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
      <h1>Meu Pedido</h1>
    </Dock>
  );
}

export default Cart;
