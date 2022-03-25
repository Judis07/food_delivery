import { RestaurantsData, FilterData } from "./data";
import Card from "./card";
import Filters from "./filters";
import "./restaurant.scss";

const Restaurants = () => {
  return (
    <div className="restaurants-container">
      <Filters data={FilterData} />
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
