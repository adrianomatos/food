import Navbar from "../../Components/Navbar/navbar";
import "./historico.css";
import { pedidos } from "../../Dados";

function Historico() {
  return (
    <>
      <Navbar showMenu={true} showHistorico={false} />

      <div className="container">
        <div className="titulo text-center">
          <h1>Histórico de pedidos</h1>
        </div>

        <div className="box-pedido">
          <table className="table">
            <thead>
              <tr>
                <th>Nº PEDIDO</th>
                <th>DATA</th>
                <th>VALOR</th>
              </tr>
            </thead>

            <tbody>
              {pedidos.map(function (pedido) {
                return (
                  <tr key={pedido.key} className="text-center">
                    <td><strong>Pedido: {pedido.id_pedido}</strong></td>
                    <td className="text-light">{pedido.dt}</td>
                    <td className="text-red">{new Intl.NumberFormat('pt-BR',{style:'currency',currency:"BRL"}).format(pedido.total)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Historico;
