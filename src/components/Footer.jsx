import styled from "styled-components";
import { BsHouseDoor, BsChat, BsHeart, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterBox = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--background);
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  height: 105px;
  left: 0;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const Foot1 = styled(BsHouseDoor)`
  & {
    color: var(--bread);
  }
  &:hover {
    color: var(--primary);
  }
`;
const Foot2 = styled(BsChat)`
  & {
    color: var(--bread);
  }
  &:hover {
    color: var(--primary);
  }
`;
const Foot3 = styled(BsHeart)`
  & {
    color: var(--bread);
  }
  &:hover {
    color: var(--primary);
  }
`;
const Foot4 = styled(BsPerson)`
  & {
    color: var(--bread);
  }
  &:hover {
    color: var(--primary);
  }
`;
export const Footer = () => {
  return (
    <FooterBox>
      <Button>
        <Link to="/list">
          <Foot1 />
        </Link>
      </Button>
      <Button>
        <Foot2 />
      </Button>
      <Button>
        <Foot3 />
      </Button>
      <Button>
        <Foot4 />
      </Button>
    </FooterBox>
  );
};
