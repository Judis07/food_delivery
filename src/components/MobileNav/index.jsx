import { useState } from "react";
import "./mobileNav.scss";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div onClick={() => setOpen(!open)} className="nav-logo">
        <img
          src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648459974/menu_nfbixf.svg"
          alt="navbar"
        />
      </div>

      <div className={open ? "sidenav active" : "sidenav"}>
        <div onClick={() => setOpen(!open)} className="close-icon">
          X
        </div>
        <div>Restaruants</div>
        <div>Deals</div>
        <div>My orders</div>
      </div>
    </div>
  );
};

export default MobileNav;
