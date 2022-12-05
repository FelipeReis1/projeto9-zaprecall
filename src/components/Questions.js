import seta_virar from "../assets/img/seta_virar.png";
import styled from "styled-components";
export default function Questions(props) {
  return (
    <StyledOpenedQuestion
      questionVisible={props.questionVisible}
      setFlashCardVisible={props.setFlashCardVisible}
    >
      {props.questionVisible === true ? (
        <>
          <p data-test="flashcard-text">{props.question}</p>
          <img
            data-test="turn-btn"
            onClick={() => props.showAnswer()}
            src={seta_virar}
            alt="seta_virar"
          ></img>
        </>
      ) : (
        ""
      )}
    </StyledOpenedQuestion>
  );
}

const StyledOpenedQuestion = styled.ul`
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
    props.questionVisible === true
      ? "flex" && props.setFlashCardVisible(true)
      : "none"};
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;
