import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.scss";
import { userRegister } from "../hooks/user-login";
import * as Yup from "yup";
import Loading from "../../src/components/ui/Loading";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters allowed")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must include at least one uppercase letter")
    .matches(/[a-z]/, "Must include at least one lowercase letter")
    .matches(/\d/, "Must include at least one number")
    .matches(/[@$!%*?#&]/, "Must include at least one special character")
    .required("Password is required"),
});

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { mutateAsync, data } = userRegister();

  useEffect(() => {
    if (data && data.ok) {
      navigate("/login");
    }
  }, [data]);

  const handleRegister = async () => {
    try {
      await validationSchema.validate(
        { username, email, password },
        { abortEarly: false }
      );
      try {
        setIsLoading(true);
        await mutateAsync({ username, email, password });
      } catch (e) {
        setIsLoading(false);
        console.log("unable to create an account", e);
      } finally {
        setIsLoading(false);
      }
    } catch (validationError: any) {
      const formattedErrors: any = {};
      validationError.inner.forEach((err: any) => {
        formattedErrors[err.path] = err.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="register-page">
        <div className="register-box">
          <p className="register-description">Create your account</p>
          <input
            className="register-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setErrors((prev) => ({ ...prev, username: "" }))}
          />

          {errors.username && (
            <p className="register-error">{errors.username}</p>
          )}

          <input
            className="register-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setErrors((prev) => ({ ...prev, email: "" }))}
          />
          {errors.email && <p className="register-error">{errors.email}</p>}

          <input
            className="register-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setErrors((prev) => ({ ...prev, password: "" }))}
          />
          {errors.password && (
            <p className="register-error">{errors.password}</p>
          )}

          <button onClick={handleRegister} className="register-button">
            Register
          </button>

          {data?.status == 400 && (
            <p className="register-error">user already exists</p>
          )}

          <Link to="/login" className="register-link">
            Already have an account? Log in here
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
