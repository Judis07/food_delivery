import CartIcon from "./cartIcon.svg";
import Input from "../Input/input";
import MobileNav from "../MobileNav";
import ProfileInfo from "../ProfileInfo";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <div className="inner-container">
          <div className="flex-container">
            <div className="flex-container">
              <div className="logo">
                <img
                  src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648211535/logo_twd2km.svg"
                  alt="Food Delivery"
                />
              </div>

              <div className="search-bar">
                <Input
                  type="text"
                  label=""
                  placeholder="Search"
                  icon="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648188073/search_h2cotd.png"
                  getValue={() => {}}
                  isRequired={true}
                />
              </div>
            </div>

            <nav className="navigation flex-container">
              <div className="link">Restaurants</div>
              <div className="link">Deals</div>
              <div className="link">My orders</div>
              <div className="cart">
                <div className="items">4</div>
                <img src={CartIcon} alt="Cart" />
              </div>

              <ProfileInfo />

              <MobileNav />
            </nav>
          </div>
        </div>
      </header>
      <div className="inner-container">{children}</div>
    </div>
  );
};

export default Layout;
