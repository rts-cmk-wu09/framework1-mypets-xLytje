import styled from "styled-components";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

const StyledContainter = styled.section`
  width: 100%;
  height: 130px;
  background: var(--background);
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 16px;
  display: flex;
  color: var(--title);
`;
const StyledLink = styled.a`
  text-decoration: none;
`;
const Image = styled.img`
  height: 100%;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 0 0;
  font-size: 16px;
  height: 24px;
  width: 24px;
  padding: 6px;
`;
const DescSection = styled.section`
  text-align: left;
`;
const HeartO = styled(AiOutlineHeart)`
  color: red;
`;
const Pin = styled(FiMapPin)`
  color: var(--primary);
`;
const DescHead = styled.h3`
  font-size: 20px;
  margin: 0;
`;
const DescSpan = styled.span`
  font-size: 12px;
  margin: 8px 0 12px;
  color: var(--bread);
`;
const DescP = styled.p`
  font-size: 14px;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
`;
export const Dogs = (props) => {
  return (
    <StyledLink href={`/details/${props.id}`} key={props.id}>
      <StyledContainter>
        <Image src={props.source} alt="" />
        <DescSection>
          <DescHead>{props.head}</DescHead>
          <DescSpan>
            <Pin /> New York City
          </DescSpan>
          <DescP>{props.p}</DescP>
        </DescSection>
        <Button>
          <HeartO />
        </Button>
      </StyledContainter>
    </StyledLink>
  );
};
