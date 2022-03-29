import { Link } from "react-router-dom";
import Review from "../../components/Review";

import RegisterForm from "./form";
import "../Login/login.scss";

const SignUp = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648211535/logo_twd2km.svg"
            alt="Food Delivery"
          />
        </div>

        <div className="login-detail">
          <RegisterForm />
        </div>

        <div className="signup-section">
          Already have an account?{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </div>
      </div>

      <Review />
    </div>
  );
};

export default SignUp;
