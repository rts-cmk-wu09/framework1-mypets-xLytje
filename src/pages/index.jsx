import { Link } from "react-router-dom";

const IndexView = () => {
  return (
    <>
      <img className="frontcat" src="./src/assets/cat.png" alt="" />
      <h1 className="fronttitle">Our Pet Society</h1>
      <h2 className="frontbread">
        We take care of your pets while you are away. We have a lot of pets to
        choose from.
      </h2>
      <img className="frontdot" src="./src/assets/dots.png" alt="" />
      <Link to={"/list"}>
        <button className="frontbutton">See Pets</button>
      </Link>
    </>
  );
};

export default IndexView;
