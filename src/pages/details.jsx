import { Link } from "react-router-dom";
import { token } from "./list";
import axios from "axios";
import { useResolvedPath } from "react-router-dom";
import { Footer } from "../components/Footer";
import { styled } from "styled-components";
import { FiMapPin } from "react-icons/fi";
import { IoPawOutline, IoFemaleOutline, IoMaleOutline } from "react-icons/io5";

const Image = styled.img`
  width: 100vw;
  background-color: var(--button);
  margin: -2rem;
  padding-bottom: 50px;
  z-index: 10;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;
const StyledSection = styled.section`
  margin: -35px -2rem 0;
  border-radius: 24px 24px 0 0;
  padding: 7%;
  padding-bottom: 130px;
  background-color: var(--background);
  position: relative;
  text-align: left;
`;
const Breed = styled.h3`
  font-size: 24px;
  margin: 0;
`;
const Paw = styled(IoPawOutline)`
  color: orange;
`;
const Male = styled(IoMaleOutline)`
  color: var(--primary);
`;
const Female = styled(IoFemaleOutline)`
  color: var(--accent2);
`;
const DescSpan = styled.span`
  font-size: 12px;
  margin: 12px 0 24px;
  color: var(--bread);
  width: 100%;
`;
const Pin = styled(FiMapPin)`
  color: var(--primary);
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 16px;
`;
const BreedP = styled.p`
  font-size: 14px;
  margin-right: 2rem;
`;
const GenderP = styled.p`
  font-size: 14px;
`;
const Desc = styled.p`
  color: var(--bread);
  width: 86%;
  margin: 0;
`;
const Back = styled.button`
  & {
    background-color: var(--button);
    margin-top: 30px;
    width: 100%;
    color: white;
  }
  &:hover {
    box-shadow: none;
  }
`;
const WhiteLink = styled(Link)`
  text-decoration: none;
  width: 86%;
`;
const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 24px 0 16px;
`;
const DetailsView = () => {
  return (
    <>
      <Image
        src={
          dogDetail.data.animal.photos[0]
            ? dogDetail.data.animal.photos[0].full
            : "../src/assets/bg-dog.png"
        }
        alt=""
      />
      <StyledSection>
        <Breed>{dogDetail.data.animal.breeds.primary}</Breed>
        <DescSpan>
          <Pin /> New York City
        </DescSpan>
        <FlexDiv>
          <Button>
            <Paw />
          </Button>
          <BreedP>{dogDetail.data.animal.breeds.primary}</BreedP>
          <Button>
            {dogDetail.data.animal.gender === "Female" ? <Female /> : <Male />}
          </Button>
          <GenderP>{dogDetail.data.animal.gender}</GenderP>
        </FlexDiv>
        <Desc>{dogDetail.data.animal.description}</Desc>
        <WhiteLink to="/list">
          <Back>Back</Back>
        </WhiteLink>
      </StyledSection>
      <Footer />
    </>
  );
};

export default DetailsView;
const params = location.pathname.slice(9);
const dogDetail = await axios.get(
  `https://api.petfinder.com/v2/animals/${params}`,
  {
    headers: {
      Authorization: `Bearer ${token.data.access_token}`,
    },
  }
);
console.log(dogDetail);
