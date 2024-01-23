import "./saudacao.css";

function Saudacao(props) {
  return (
    <div>
      <h1>Food - Faça seu pedido</h1>
      <p>Seja bem vindo {props.nome}!</p>
    </div>
  );
}

export default Saudacao;
