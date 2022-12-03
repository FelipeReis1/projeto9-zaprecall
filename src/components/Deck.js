import seta_virar from "../assets/img/seta_virar.png";
import styled from "styled-components";
export default function Deck() {
  return (
    <StyledPerguntaAberta>
      <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
      <div className="containerBotoes">
        <button>Não lembrei</button>
        <button>Quase não lembrei</button>
        <button>Zap!</button>
        <img src={seta_virar} alt="seta_virar"></img>
      </div>
    </StyledPerguntaAberta>
  );
}

const StyledPerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .containerBotoes {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    button {
      width: 90px;
      font-family: "Recursive";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #ffffff;
      background-color: #2fbe34;
      border-radius: 5px;
      border: 1px solid #2fbe34;
      padding: 5px;
      margin-left: 6px;
    }
  }
`;

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/
