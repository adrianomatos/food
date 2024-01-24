import { Dock } from "react-dock";

import "./cart.css";

function Cart(){
	return (
    <Dock position="right" 
		isVisible={true} 
		fluid={true}
		size={420}
		>
      <h1>Meu Pedido</h1>
    </Dock>
  );
}

export default Cart;
