import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.scss";
import { userLogin } from "../hooks/user-login";
import Loading from "../../src/components/ui/Loading"
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn } = useAuth();


  const navigate = useNavigate();
  const { mutateAsync } = userLogin();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await mutateAsync({ username, password });
      navigate("/landing")
      localStorage.setItem("isLoggedIn", "true");
    } catch (err) {
      setIsLoading(false);
      setError("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="login-page">
        <div className="login-box">
          <h1 className="app-title">AI Video Assistant</h1>
          <p className="app-description">
            This app transcribes and summarizes YouTube videos, and lets you ask
            questions about their content. Gain quick insights and better
            understanding of complex topics.
          </p>
          <input
            className="username-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setError("")}
          />
          <input
            className="password-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setError("")}
          />
          <button className="login-btn" onClick={handleLogin}>
            Log In
          </button>
          {error?.length ? <span className="login-error">{error}</span> : null}
          <Link to="/register" className="register-link">
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
