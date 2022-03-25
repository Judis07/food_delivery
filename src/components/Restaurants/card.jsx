const Card = (props) => {
  const { image, name, distance, minPrice, tags, isFeatured } = props;
  return (
    <div className="restaurant-card">
      {isFeatured && <div className="featured">Featured</div>}

      <div className="card-image">
        <img src={image} alt="" />
      </div>

      <div className="card-detail">
        <div className="card-name">{name}</div>

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
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
