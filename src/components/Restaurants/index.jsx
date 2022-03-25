import Card from "./card";
import { RestaurantsData } from "./data";
import "./restaurant.scss";

const Restaurants = () => {
  return (
    <div className="restaurants-container">
      <div className="section-title">Nearby restaurants</div>

      <div className="flex-container">
        {RestaurantsData.map((info) => (
          <Card key={info.name} {...info} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
