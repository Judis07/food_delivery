import "./foodCard.scss";

const LandscapeCard = () => {
  return (
    <div className="card-container ">
      <div className="landscape">
        <div className="card-image">
          <img
            src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648281052/nigiri_set_jukgnn.png"
            alt="Nigiri set"
          />
        </div>

        <div className="card-detail">
          <div className="name">Nigiri Set</div>

          <div className="about">
            Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum
            ignota euismod corpora, et saepe.
          </div>

          <div className="price">$ 16.80</div>
        </div>

        <div className="card-cta">
          <div className="counter">
            <div className="decrease">-</div>
            <div className="number">1</div>
            <div className="increase">+</div>
          </div>
          <div className="cart">+ Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default LandscapeCard;
