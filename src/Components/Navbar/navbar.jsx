import "./navbar.css";
import logo from "../../Assets/logo.png";
import bag from "../../Assets/bag.png";
import Cart from "../Cart/cart";

function Navbar() {
  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <div className="navbar">
      <img src={logo} className="logotipo" alt="Logotipo" />

      <div className="menu">
        <a href="/historico">Histórico</a>

        <button onClick={openSidebar} className="btn btn-red">
          <img className="icon" src={bag} alt="Sacola" />
          Sacola
        </button>
      </div>
			<Cart />
    </div>
  );
}

export default Navbar;
