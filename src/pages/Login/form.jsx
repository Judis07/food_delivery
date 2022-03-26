import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/input";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);

  const getValueFn = (value) => {
    console.log(value);
  };

  const changeShowPassFn = () => {
    setShowPass(!showPass);
  };
  return (
    <form>
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

      <div className="login-btn">
        <button>Login</button>
      </div>

      <div className="forgot-pass">
        <Link className="link" to="/forgot-password">
          Forgot password
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
