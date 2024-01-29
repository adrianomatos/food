import Navbar from "../../Components/Navbar/navbar.jsx";
import "./checkout.css";
import { CartContext } from "../../Contexts/cart-context.jsx";
import { useContext } from "react";

function Checkout() {
  const { totalCart } = useContext(CartContext);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="titulo text-center">
          <h1>Finalizar Pedido</h1>
        </div>
      </div>

      <div className="col-3">
        <div className="box-checkout">
          <h3>Dados Pessoais</h3>
          <div className="input-group">
            <p htmlFor="nome">Nome Completo</p>
            <input type="text" name="nome" id="nome" />
          </div>

          <div className="input-group">
            <p htmlFor="email">E-mail</p>
            <input type="email" name="email" id="email" />
          </div>

          <div className="input-group">
            <p htmlFor="fone">Telefone de Contato</p>
            <input type="tel" name="fone" id="fone" />
          </div>
        </div>
      </div>

      <div className="col-3">
        <div className="box-checkout">
          <h3>Endereço de Entrega</h3>
          <div className="input-group">
            <p>Endereço</p>
            <input type="text" name="end" />
          </div>

          <div className="input-group">
            <p>Bairro</p>
            <input type="text" name="bairro" />
          </div>

          <div className="input-group">
            <p>CEP</p>
            <input type="num" name="cep" />
          </div>

          <div className="input-group">
            <p>Cidade</p>
            <input type="text" name="cidade" />
          </div>

          <div className="input-group">
            <p>UF</p>
            <select name="uf" id="uf">
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="CE">Ceará</option>
            </select>
          </div>
        </div>
      </div>

      <div className="col-3">
        <div className="box-checkout">
          <h3>Valores</h3>

          <div className="checkout-valores">
            <span>Total</span>
            <span>
              <strong>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalCart)}
              </strong>
            </span>
          </div>

          <div className="checkout_button">
            <button className="btn-checkout">Finalisar Pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
