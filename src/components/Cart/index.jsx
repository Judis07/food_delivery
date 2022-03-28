import "./cart.scss";

const Cart = ({ count }) => {
  return (
    <div className="cart-container">
      {count > 0 ? (
        <div className="filled-cart">
          <img
            src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648462415/shopping_bag_w0zvlb.svg"
            alt=""
          />

          <div className="items">{count}</div>
        </div>
      ) : (
        <div className="empty-cart">
          <img
            src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648462296/empty-cart_fzczcb.svg"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
