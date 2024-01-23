import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import Checkout from "./Pages/Checkout/checkout.jsx";
import Historico from "./Pages/Historico/historico.jsx";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
