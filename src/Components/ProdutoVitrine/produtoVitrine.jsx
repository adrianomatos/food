import "./produtoVitrine.css";
import bag from "../../Assets/bag-black.png";
import { CartContext } from "../../Contexts/cart-context";
import { useContext } from "react";

function ProdutoVitrine(props) {
  const { AddItemCart } = useContext(CartContext);

  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1,
    };

    AddItemCart(item);
  }

  return (
    <div className="produto-box text-center">
      <img src={props.foto} alt="Foto do produto" />

      <div>
        <h2>{props.nome}</h2>
        <p className="prod-vitrine-descricao">{props.descricao}</p>
        <p className="prod-vitrine-preco">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.preco)}
        </p>
      </div>

      <div>
        <button onClick={AddItem} className="btn btn-cart">
          <img className="icon" src={bag} alt="Imagem sacola" />
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default ProdutoVitrine;
