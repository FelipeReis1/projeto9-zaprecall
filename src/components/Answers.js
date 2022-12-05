import styled from "styled-components";

export default function Answers(props) {
  return (
    <StyledOpenedAnswer
      answerVisible={props.answerVisible}
      setQuestionVisible={props.setQuestionVisible}
      answer={props.answer}
      answered={props.answered}
    >
      <p data-test="flashcard-text">{props.answer}</p>
      <div className="containerBotoes">
        <button
          data-test="no-btn"
          onClick={() => props.showFlashCardMarkedWrong()}
        >
          Não lembrei
        </button>
        <button
          data-test="partial-btn"
          onClick={() => props.showFlashCardMarkedAlmost()}
        >
          Quase não lembrei
        </button>
        <button
          data-test="zap-btn"
          onClick={() => props.showFlashCardMarkedCorrect()}
        >
          Zap!
        </button>
      </div>
    </StyledOpenedAnswer>
  );
}

const StyledOpenedAnswer = styled.ul`
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
  display: ${(props) =>
    props.answerVisible === true
      ? "flex" && props.setQuestionVisible(false)
      : "none"};
  flex-direction: column;
  justify-content: space-between;
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
      &:hover {
        cursor: pointer;
      }
    }
    button:nth-child(1) {
      background-color: #ff3030;
      border: 1px solid #ff3030;
    }
    button:nth-child(2) {
      background-color: #ff922e;
      border: 1px solid #ff922e;
    }
    button:nth-child(3) {
      background-color: #2fbe34;
    }
  }
`;
