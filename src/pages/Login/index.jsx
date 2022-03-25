import { Link } from "react-router-dom";

import LoginForm from "./form";
import "./login.scss";

const Login = () => {
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
          <LoginForm />
        </div>

        <div className="signup-section">
          Don’t have an account?{" "}
          <Link className="link" to="/register">
            Sign up
          </Link>
        </div>
      </div>

      <div className="review-section"></div>
    </div>
  );
};

export default Login;
