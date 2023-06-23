import axios from "axios";
import { styled } from "styled-components";
import { FiBell } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsHouseDoor, BsChat, BsHeart, BsPerson } from "react-icons/bs";
import { Tags } from "../components/Tags";
import { Dogs } from "../components/Dogs";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Footer = styled.footer`
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
const Image = styled.img`
  width: 40px;
  scale: 2.4;
`;
const Bell = styled(FiBell)`
  color: var(--primary);
`;
const Pin = styled(FaMapMarkerAlt)`
  color: var(--semantic);
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-basis: 60%;
`;
const Text = styled.select`
  font-size: 14px;
  border: none;
  background: transparent;
`;
const StyledDiv = styled.div`
  margin-top: 110px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;
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

const names = ["Cats", "Dogs", "Birds", "Horses", "Fish", "Rabbits", "Other"];
const ListView = () => {
  return (
    <>
      <Header>
        <Image src="./src/assets/avatar.png" alt="" />
        <Div>
          <Pin />
          <Text name="Cities">
            <option value="NYC">New York City</option>
            <option value="NYC">Roskilde</option>
            <option value="NYC">Viby Sjælland</option>
            <option value="NYC">København</option>
            <option value="NYC">Aarhus</option>
          </Text>
        </Div>
        <Button>
          <Bell />
        </Button>
      </Header>
      <div className="carousel">
        {names.map((data) => (
          <Tags name={data} key={data}></Tags>
        ))}
      </div>
      <StyledDiv>
        {response.data.animals.map((data) => (
          <Dogs
            source={
              data.photos[0] ? data.photos[0].medium : "./src/assets/dog.png"
            }
            head={data.breeds.primary}
            p={data.description}
            id={data.id}
            key={data.id}
          />
        ))}
      </StyledDiv>
      <Footer>
        <Button>
          <Foot1 />
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
      </Footer>
    </>
  );
};

export default ListView;

export const token = await axios.post(
  `https://api.petfinder.com/v2/oauth2/token`,
  `grant_type=client_credentials&client_id=${
    import.meta.env.VITE_API_KEY
  }&client_secret=${import.meta.env.VITE_SECRET_KEY}`,
  {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

const response = await axios.get(
  "https://api.petfinder.com/v2/animals?type=dog",
  {
    headers: {
      Authorization: `Bearer ${token.data.access_token}`,
    },
  }
);

console.log(response.data.animals);
