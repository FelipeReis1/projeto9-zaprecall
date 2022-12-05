import styled from "styled-components";
import seta_play from "../assets/img/seta_play.png";
import { useState } from "react";
import Questions from "./Questions";
import Answers from "./Answers";
import icone_certo from "../assets/img/icone_certo.png";
import icone_quase from "../assets/img/icone_quase.png";
import icone_erro from "../assets/img/icone_erro.png";

export default function Flashcard(props) {
  const [flashCardVisible, setFlashCardVisible] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [answeredWrong, setAnsweredWrong] = useState(false);
  const [answeredAlmost, setAnsweredAlmost] = useState(false);
  const [answeredCorrect, setAnsweredCorrect] = useState(false);

  function showAnswer() {
    setAnswerVisible(true);
  }
  function turnCard() {
    setQuestionVisible(true);
  }
  function showFlashCardMarkedWrong() {
    setFlashCardVisible(false);
    setAnswerVisible(false);
    setAnsweredWrong(true);
    setAnswered(true);
  }
  function showFlashCardMarkedAlmost() {
    setFlashCardVisible(false);
    setAnswerVisible(false);
    setAnsweredAlmost(true);
    setAnswered(true);
  }
  function showFlashCardMarkedCorrect() {
    setFlashCardVisible(false);
    setAnswerVisible(false);
    setAnsweredCorrect(true);
    setAnswered(true);
  }
  return (
    <>
      <StyledClosedQuestion
        flashCardVisible={flashCardVisible}
        answeredWrong={answeredWrong}
        answeredAlmost={answeredAlmost}
        answeredCorrect={answeredCorrect}
        answered={answered}
      >
        <p>Pergunta {props.numPergunta}</p>
        {!answered ? (
          <img onClick={() => turnCard()} src={seta_play} alt="seta_play"></img>
        ) : answeredWrong ? (
          <img src={icone_erro} />
        ) : answeredAlmost ? (
          <img src={icone_quase} />
        ) : answeredCorrect ? (
          <img src={icone_certo} />
        ) : (
          <img onClick={() => turnCard()} src={seta_play} alt="seta_play"></img>
        )}
      </StyledClosedQuestion>
      {questionVisible ? (
        <Questions
          questionVisible={questionVisible}
          question={props.question}
          showAnswer={showAnswer}
          setFlashCardVisible={setFlashCardVisible}
        />
      ) : (
        ""
      )}
      {answerVisible ? (
        <Answers
          answerVisible={answerVisible}
          answer={props.answer}
          answered={answered}
          setQuestionVisible={setQuestionVisible}
          showFlashCardMarkedWrong={showFlashCardMarkedWrong}
          showFlashCardMarkedAlmost={showFlashCardMarkedAlmost}
          showFlashCardMarkedCorrect={showFlashCardMarkedCorrect}
        />
      ) : (
        ""
      )}
    </>
  );
}

const StyledClosedQuestion = styled.ul`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${(props) => (props.flashCardVisible === false ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  position: relative;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) =>
      props.answeredWrong
        ? "#FF3030"
        : props.answeredAlmost
        ? "#FF922E"
        : props.answeredCorrect
        ? "#2FBE34"
        : "#333333"};
    text-decoration-line: ${(props) => (props.answered ? "line-through" : "")};
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
