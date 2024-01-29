import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props) {
  // Variável de estado - Itens do carrinho
  const [cartItems, setCartItems] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  // ---------------------------- ADICIONAR ITEM NO CARRINHO
  function AddItemCart(item) {
    let cartItemsNovo = [];
    let findItem = false;

    // Verifica se item já existe no carrinho...
    for (var prod of cartItems) {
      // Se encontrou
      if (prod.id == item.id) {
        item.qtd = prod.qtd + 1;
        findItem = true;
        cartItemsNovo.push(item);
      } else {
        cartItemsNovo.push(prod);
      }
    }

    // Se não encontrou o item ou é o primeiro a ser inserido...
    if (findItem == false || cartItems.legth == 0) {
      cartItemsNovo.push(item);
    }

    // Atualiza array do carrinho
    setCartItems(cartItemsNovo);
		
		// Atualiza total 
		CalcTotal(cartItemsNovo);
  }


  // ---------------------------- REMOÇÃO DE ITEM DO CARRINHO
  function RemoveItemCart(id) {
    let cartItemsNovo = [];

    // Localiza o item e atualiza...
    for (var prod of cartItems) {
      // Se encontrou
      if (prod.id == id) {
        prod.qtd = prod.qtd - 1;
      }
      cartItemsNovo.push(prod);
    }

    // Remove itens zerados do carrinho (com filter)
    cartItemsNovo = cartItemsNovo.filter(function (item) {
      return item.qtd > 0;
    });

    // Atualiza array do carrinho
    setCartItems(cartItemsNovo);

    // Atualiza total
    CalcTotal(cartItemsNovo);
  }

  function CalcTotal(items) {
    let total = 0;

    // Varre items e joga em item
    for (var item of items) {
      total = total + item.preco * item.qtd;
    }
		setTotalCart(total)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        AddItemCart,
        RemoveItemCart,
        totalCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
