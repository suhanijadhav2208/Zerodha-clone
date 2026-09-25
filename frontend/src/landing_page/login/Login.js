import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const response = await fetch(
        "http://localhost:3002/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        setLoading(false);
        return;
      }

      window.location.href =
        "http://localhost:3001";

    } catch (error) {

      console.error(error);

      setError(
        "Unable to connect to server"
      );

    }

    setLoading(false);
  };

  return (
    <div className="signup-container">

      <div className="signup-box">

        <div className="signup-logo">

          <img
            src="/media/images/logo.svg"
            alt="Zerodha"
          />

        </div>

        <h1>Login</h1>

        <p className="signup-subtitle">
          Login to access your dashboard
        </p>

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

        <p className="login-link">

          Don't have an account?{" "}

          <Link to="/signup">
            Create Account
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;