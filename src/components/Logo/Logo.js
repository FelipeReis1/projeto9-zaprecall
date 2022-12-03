import styled from "styled-components";
import logo from "../../assets/img/logo.png";
export default function Logo() {
  return (
    <StyledTitle>
      <StyledImg src={logo} alt="logo" />
      <h1>ZapRecall</h1>
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
    transform: rotate(0.58deg);
  }
`;

const StyledImg = styled.img`
  width: 52px;
  height: 60px;
`;
