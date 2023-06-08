import axios from "axios";
import { Link } from "react-router-dom";

const DetailsView = () => {
  return (
    <>
      <img class="frontcat" src="./src/assets/cat.png" alt="" />
      <h1 class="fronttitle">My Pets</h1>
      <h2 class="frontbread">
        Taking care of a pet is my favorite, it helps me to gaimr stress and
        fatigue.
      </h2>
      <img class="frontdot" src="./src/assets/dots.png" alt="" />
      <Link>
        <button class="frontbutton">Skip</button>
      </Link>
    </>
  );
};

export default DetailsView;
