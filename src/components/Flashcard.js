import styled from "styled-components";
import Deck from "../components/Deck";
import seta_play from "../assets/img/seta_play.png";

export default function Flashcard() {
  return (
    <>
      <StyledPerguntaFechada>
        <p>Pergunta 1</p>
        <img onClick="" src={seta_play} alt="seta_play"></img>
      </StyledPerguntaFechada>
    </>
  );
}

const StyledPerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  img {
    position: absolute;
    bottom: 20px;
    right: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;
