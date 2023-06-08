import axios from "axios";

const IndexView = () => {
  return (
    <>
      <img class="frontcat" src="./src/assets/cat.png" alt="" />
      <h1 class="fronttitle">My Pets</h1>
      <h2 class="frontbread">
        Taking care of a pet is my favorite, it helps me to gaimr stress and
        fatigue.
      </h2>
      <img class="frontdot" src="./src/assets/dots.png" alt="" />
      <button class="frontbutton">Skip</button>
    </>
  );
};

export default IndexView;

const token = await axios.post(
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

export const response = await axios.get(
  "https://api.petfinder.com/v2/animals?type=cat",
  {
    headers: {
      Authorization: `Bearer ${token.data.access_token}`,
    },
  }
);
console.log(response.data.animals);
