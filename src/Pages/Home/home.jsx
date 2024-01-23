import Navbar from "../../Components/Navbar/navbar.jsx";
import ProdutoVitrine from "../../Components/ProdutoVitrine/produtoVitrine.jsx";

function Home() {
  return (
    <>
      <Navbar />

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
        <ProdutoVitrine />
        <ProdutoVitrine />
        <ProdutoVitrine />
        <ProdutoVitrine />
      </div>
    </>
  );
}

export default Home;
