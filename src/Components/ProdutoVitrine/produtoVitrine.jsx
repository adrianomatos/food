import "./produtoVitrine.css";
import foto from "../../Assets/hamburguer.png";
import bag from "../../Assets/bag-black.png";

function ProdutoVitrine(props) {
  return (
    <div className="produto-box text-center">
      <img src={foto} alt="" />

      <div>
        <h2>Adriano Burguer</h2>
        <p className="prod-vitrine-descricao">
          Hamburguer de 250g, queijo, tomate, alface e cebola.
        </p>
        <p className="prod-vitrine-preco">R$ 18,90</p>
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
