import { Link } from "react-router-dom";
import axios from "axios";

const DetailsView = () => {
  return (
    <>
      <img className="frontcat" src="./src/assets/cat.png" alt="" />
      <h1 className="fronttitle">My Pets</h1>
      <h2 className="frontbread">
        Taking care of a pet is my favorite, it helps me to gaimr stress and
        fatigue.
      </h2>
      <img className="frontdot" src="./src/assets/dots.png" alt="" />
      <Link>
        <button className="frontbutton">Skip</button>
      </Link>
    </>
  );
};

export default DetailsView;

// const response = await axios.get("https://api.petfinder.com/v2/animals?=dog", {
//   headers: {
//     Authorization: `Bearer ${token.data.access_token}`,
//   },
// });
