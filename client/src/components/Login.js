import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)
  const [errors, setErrors] = useState([])

  const initialState = {
    username: "",
    password: "",
  }

  const [formData, setFormData] = useState(initialState)

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });
  }

  return (
    <div className="container">
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Wanderlust</h1>
          <h3>Enter your details to sign in to your account.</h3>
          {errors.length > 0 && (
            <p className="error-message error">
              {errors}</p>
          )}
          <div className="credentials">
            <input
              type="text"
              id="username"
              autoComplete="off"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
              className="login-form-input"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              className="login-form-input"
            />
            <button className="form-button" type="submit">Login</button>
          </div>
          <h5 className="form-text">Don't have an account?<br></br><Link className="link login-link" to="/signup">Sign up now.</Link></h5>
        </form>
      </div>
    </div>
  );
}

export default Login;