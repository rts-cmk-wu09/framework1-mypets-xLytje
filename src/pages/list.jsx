import axios from "axios";
import { styled } from "styled-components";
import { FiBell } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Footer } from "../components/Footer";
import { Tags } from "../components/Tags";
import { Dogs } from "../components/Dogs";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
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
      <Footer />
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
