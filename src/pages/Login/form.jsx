import { Link } from "react-router-dom";
import Input from "../../components/Input/input";

const LoginForm = () => {
  return (
    <form>
      <h1>Login</h1>
      <p>Sign in with your data that you entered during your registration.</p>

      <Input
        type="email"
        label="email"
        placeholder="name@example.com"
        isRequired={true}
      />

      <Input
        type="password"
        label="password"
        placeholder="min. 8 characters"
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
