import { Link } from "react-router-dom";
import { token } from "./list";
import axios from "axios";
import { useResolvedPath } from "react-router-dom";
import { styled } from "styled-components";

const Image = styled.img`
  width: 100vw;
  background-color: var(--button);
  margin: -2rem;
  padding-bottom: 50px;
`;

const DetailsView = () => {
  return (
    <>
      <Image src="../src/assets/bg-dog.png" alt="" />
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
