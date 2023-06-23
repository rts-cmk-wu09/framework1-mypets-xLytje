import Lottie from "lottie-react";
import errorAnimation from "../lottiefiles/erroranimation.json";
import styled from "styled-components";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20vw;
  height: 100vh;
`;
// const Button = styled.button`
//   font-size: 1em;
// `;
const StyledLottie = styled(Lottie)`
  width: 100vw;
`;

const ErrorView = () => {
  return (
    <StyledDiv>
      <Heading title="Ohh no..." size="16" as="h1" />
      <StyledLottie animationData={errorAnimation} loop={true} />
      <Link to="/">
        <button>Take me home</button>
      </Link>
    </StyledDiv>
  );
};

export default ErrorView;
