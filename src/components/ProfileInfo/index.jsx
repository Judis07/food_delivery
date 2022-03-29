import { useState } from "react";
import { withRouter } from "react-router";
import "./profileInfo.scss";

const ProfileInfo = (props) => {
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");

    props.history.push("/login");
  };

  return (
    <div onClick={() => setOpen(!open)} className="profile-info-container">
      <div className="profile">
        <img
          src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648542208/default_m45zxb.png"
          alt="My Profile"
        />
      </div>

      <div className={open ? "info active" : "info"}>
        {/* <div>arvind@test.com</div> */}
        <div onClick={logout}>Logout</div>
      </div>
    </div>
  );
};

export default withRouter(ProfileInfo);
