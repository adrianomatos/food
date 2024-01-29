import "./produtoVitrine.css";
import bag from "../../Assets/bag-black.png";

function ProdutoVitrine(props) {
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
        <button className="btn btn-cart">
          <img className="icon" src={bag} alt="Imagem sacola" />
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default ProdutoVitrine;
