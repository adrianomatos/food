import "./navbar.css";
import logo from "../../Assets/logo.png";
import bag from "../../Assets/bag.png"

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logotipo" alt="Logotipo" />
      
			<div className="menu">
        <a href="#">Histórico</a>
        <button className="btn btn-red">
          <img className="icon" src={bag} alt="Sacola" />
          Sacola
        </button>
      </div>
    </div>
  );
}

export default Navbar;
