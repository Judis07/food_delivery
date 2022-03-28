import Cart from "../Cart";

const Card = (props) => {
  const { image, name, distance, minPrice, tags, inCart, isFeatured } = props;
  return (
    <div className="restaurant-card">
      {isFeatured && <div className="featured">Featured</div>}

      <div className="card-image">
        <img src={image} alt="" />
      </div>

      <div className="card-detail">
        <div className="flex-container">
          <div className="card-name">{name}</div>

          <Cart count={inCart} />
        </div>

        <div className="card-info">
          <div className="time-icon">
            <img
              src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648188899/clock_qzn6ck.svg"
              alt=""
            />
          </div>
          <div className="distance">{distance}</div>
          <div className="circle"></div>
          <div className="price">{minPrice}</div>
        </div>

        <div className="card-tags">
          {tags.map((tag) => (
            <div key={tag.id} className="card-tag">
              <div className="tag-icon">
                <img src={tag.icon} alt="" />
              </div>
              <div>{tag.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
