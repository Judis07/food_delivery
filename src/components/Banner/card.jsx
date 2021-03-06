const Card = (props) => {
  const { title, discount, target, image, bgColor, color } = props;
  return (
    <div style={{ backgroundColor: bgColor }} className="discount-card">
      <div className="card-image">
        <img src={image} alt={target} loading="lazy" />
      </div>

      <div className="details">
        <div className="title">{title}</div>
        <div className="discount" style={{ color: color }}>
          {discount}% Off
        </div>

        <div className="target">{target}</div>
      </div>
    </div>
  );
};

export default Card;
