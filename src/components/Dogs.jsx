import styled from "styled-components";

const StyledContainter = styled.section`
  width: 100%;
  height: 130px;
  background: var(--background);
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 16px;
  display: flex;
`;
const Image = styled.img`
  height: 100%;
`;
export const Dogs = (props) => {
  return (
    <StyledContainter>
      <Image src={props.source} alt="" />
    </StyledContainter>
  );
};
