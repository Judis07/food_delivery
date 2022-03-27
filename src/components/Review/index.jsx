import LandscapeCard from "../FoodCard/landscape";
import PortraitCard from "../FoodCard/portrait";
import RatingCard from "../RatingCard";
import "./review.scss";

const Review = () => {
  return (
    <div className="review-section">
      <div className="grid-container">
        <div className="first-card">
          <RatingCard />
        </div>
        <div className="second-card">
          <PortraitCard
            name="Roll set"
            image="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648281740/roll_set_se4jcy.png"
            about="Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum
            ignota euismod corpora, et saepe."
            price="$ 22.56"
          />
        </div>

        <div className="bottom-card">
          <LandscapeCard
            name="Nigiri Set"
            image="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648281052/nigiri_set_jukgnn.png"
            about="Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum
            ignota euismod corpora, et saepe."
            price="$ 16.80"
          />
        </div>
      </div>

      <div style={{ marginTop: "-5em", zIndex: "5" }}></div>
    </div>
  );
};

export default Review;
