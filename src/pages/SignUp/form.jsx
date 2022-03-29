import { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { API_URL, setItemTOStorage } from "../../config/utils";
import axios from "axios";

import Input from "../../components/Input/input";

const RegisterForm = (props) => {
  const [showPass, setShowPass] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getValueFn = (name, value) => {
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else {
      setConfirmPass(value);
    }
  };

  const changeShowPassFn = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      if (password === confirmPass) {
        const res = await axios.post(`${API_URL}/signup`, {
          email,
          password,
        });

        const { user } = res.data;
        setItemTOStorage("user", JSON.stringify(user));
        setLoading(false);

        props.history.push("/");
      } else {
        throw error("Password and Confirm Password should match");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        console.log(err);
      }
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <p>Fill in the details to become a user.</p>

      <Input
        type="email"
        label="email"
        placeholder="name@example.com"
        getValue={getValueFn}
        isRequired={true}
      />

      <Input
        type={showPass ? "text" : "password"}
        label="password"
        placeholder="min. 8 characters"
        icon="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648279422/password-eye_r62wun.svg"
        getValue={getValueFn}
        changeShowPass={changeShowPassFn}
        isRequired={true}
      />

      <Input
        type={showPass ? "text" : "password"}
        label="confirm password"
        placeholder="min. 8 characters"
        icon="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648279422/password-eye_r62wun.svg"
        getValue={getValueFn}
        changeShowPass={changeShowPassFn}
        isRequired={true}
      />

      {!loading && error && <p className="err-msg">{error}</p>}

      <div className="login-btn">
        {loading ? (
          <button>Loading...</button>
        ) : (
          <button type="submit">Register</button>
        )}
      </div>

      <div className="forgot-pass">
        <Link className="link" to="/forgot-password">
          Forgot password
        </Link>
      </div>
    </form>
  );
};

export default withRouter(RegisterForm);
