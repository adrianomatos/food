import "./navbar.css";
import logo from "../../Assets/logo.png";
import bag from "../../Assets/bag.png";
import Cart from "../Cart/cart";
import { Link } from "react-router-dom";

function Navbar(props) {

  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <div className="navbar">
      <img src={logo} className="logotipo" alt="Logotipo" />

      {/* Decisão simples ou usando: props.showMenu && */}
      {props.showMenu ? (
        <div className="menu">
					{/* Só exibe histórico fora da página histórico */}
          {/* LINK: Transição entre telas sem refresh E Navigate*/}
          {props.showHistorico && 
						<Link to="/historico">Histórico</Link>
					}
          <button onClick={openSidebar} className="btn btn-red">
            <img className="icon" src={bag} alt="Sacola" />
            Sacola
          </button>
        </div>
      ) : null}

      <Cart />
    </div>
  );
}

export default Navbar;
