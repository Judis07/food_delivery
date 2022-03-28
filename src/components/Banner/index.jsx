import Card from "./card";
import "./banner.scss";
const Banner = () => {
  return (
    <div className="banner-container">
      <Card
        title="All deserts"
        discount="20"
        target="Deserty"
        image="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648460365/deserty_v8fiag.png"
        color="#4E60FF"
        bgColor="#F3F4FF"
      />
      <Card
        title="Big Burgers"
        discount="50"
        target="Fooddies"
        image="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648460367/fooddies_bemtx8.png"
        color="#FD6D22"
        bgColor="#FFF3ED"
      />
    </div>
  );
};

export default Banner;
