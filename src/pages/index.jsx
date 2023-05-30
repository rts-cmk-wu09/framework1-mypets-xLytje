import axios from "axios";

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

const response = await axios.get(
  "https://api.petfinder.com/v2/animals?type=cat",
  {
    headers: {
      Authorization: `Bearer ${token.data.access_token}`,
    },
  }
);
console.log(response.data.animals);
