import DesertIcon from "./desert.svg";
import BurgerIcon from "./burger.svg";
import Card from "./card";
import "./banner.scss";
const Banner = () => {
  return (
    <div className="banner-container">
      <Card
        title="All deserts"
        discount="20"
        target="Deserty"
        image={DesertIcon}
        color="#4E60FF"
        bgColor="#F3F4FF"
      />
      <Card
        title="Big Burgers"
        discount="50"
        target="Fooddies"
        image={BurgerIcon}
        color="#FD6D22"
        bgColor="#FFF3ED"
      />
    </div>
  );
};

export default Banner;
