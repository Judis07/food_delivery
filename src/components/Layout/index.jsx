import Logo from "./logo.svg";
import CartIcon from "./cartIcon.svg";
import ProfileIcon from "./default.svg";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <div className="inner-container">
          <div className="flex-container">
            <div className="logo">
              <img src={Logo} alt="Food Delivery" />
            </div>

            <nav className="navigation flex-container">
              <div className="link">Restaurants</div>
              <div className="link">Deals</div>
              <div className="link">My orders</div>
              <div className="cart">
                <img src={CartIcon} alt="Cart" />
              </div>

              <div className="profile">
                <img src={ProfileIcon} alt="My Profile" />
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="inner-container">{children}</div>
    </div>
  );
};

export default Layout;
