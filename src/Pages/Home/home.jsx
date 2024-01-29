import Navbar from "../../Components/Navbar/navbar.jsx";
import ProdutoVitrine from "../../Components/ProdutoVitrine/produtoVitrine.jsx";
import { produtos } from "../../Dados.js";

function Home() {
  return (
    <>
      <Navbar showMenu={true} showHistorico={true} />

      <div className="container">
        <div className="titulo text-center">
          <h1>Nosso Cardápio</h1>
          <p className="subtitulo">
            Clique em adicionar para colocar os produtos na sacola de compras.
            Se preferir, você pode pedir pelo WhatsApp: (88) 9 8193-5976.
          </p>
        </div>
      </div>

      <div className="text-center">
        {produtos.map(function (produto) {
          return (
            <ProdutoVitrine
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              foto={produto.foto}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
