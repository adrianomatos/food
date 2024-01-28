import Navbar from "../../Components/Navbar/navbar";
import "./historico.css";

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
            <tr>
              <th>Nº PEDIDO</th>
              <th>DATA</th>
              <th>VALOR</th>
            </tr>

            <tr className="text-center">
              <td>
                <strong>Pedido: 51354</strong>
              </td>
              <td className="text-light">02/01/2024</td>
              <td className="text-red">R$ 123,00</td>
            </tr>

            <tr className="text-center">
              <td>
                <strong>Pedido: 51354</strong>
              </td>
              <td className="text-light">12/01/2024</td>
              <td className="text-red">R$ 133,00</td>
            </tr>

            <tr className="text-center">
              <td>
                <strong>Pedido: 51354</strong>
              </td>
              <td className="text-light">14/01/2024</td>
              <td className="text-red">R$ 120,00</td>
            </tr>

            <tr className="text-center">
              <td>
                <strong>Pedido: 51354</strong>
              </td>
              <td className="text-light">20/01/2024</td>
              <td className="text-red">R$ 98,00</td>
            </tr>

            <tr className="text-center">
              <td>
                <strong>Pedido: 51354</strong>
              </td>
              <td className="text-light">27/01/2024</td>
              <td className="text-red">R$ 88,00</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Historico;
