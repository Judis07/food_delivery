import { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { API_URL, setItemTOStorage } from "../../config/utils";
import axios from "axios";

import Input from "../../components/Input/input";
import Checkbox from "../../components/Checkbox";

const LoginForm = (props) => {
  const [showPass, setShowPass] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getValueFn = (name, value) => {
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const changeShowPassFn = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      const { user } = res.data;
      setItemTOStorage("user", JSON.stringify(user));
      setLoading(false);

      props.history.push("/");
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
      <h1>Login</h1>
      <p>Sign in with your data that you entered during your registration.</p>

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

      <Checkbox label="Keep me logged in" />

      {!loading && error && <p className="err-msg">{error}</p>}

      <div className="login-btn">
        {loading ? (
          <button>Loading...</button>
        ) : (
          <button type="submit">Login</button>
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

export default withRouter(LoginForm);
