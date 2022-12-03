import styled from "styled-components";
import Footer from "./components/Footer";
import Logo from "./components/Logo/Logo";
import Flashcard from "./components/Flashcard";

export default function App() {
  return (
    <StyledContainer>
      <Logo />
      <Flashcard></Flashcard>
      <Footer />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
