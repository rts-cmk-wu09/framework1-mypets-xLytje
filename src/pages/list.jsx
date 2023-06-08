import { Link } from "react-router-dom";

const ListView = () => {
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

export default ListView;
