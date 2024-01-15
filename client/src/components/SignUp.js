import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const [photoFile, setPhotoFile] = useState(null);

  const initialState = {
    first_name: "",
    last_name: "",
    tsa_precheck: "",
    username: "",
    password: "",
    password_confirmation: ""
  };

  const [formData, setFormData] = useState(initialState);

  function handleChange(event) {
    if (event.target.name === "avatar") {
      setPhotoFile(event.target.files[0]);
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
      setErrors((prevErrors) => ({
        ...prevErrors,
        [event.target.name]: null,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("tsa_precheck", formData.tsa_precheck);
    data.append("username", formData.username);
    data.append("password", formData.password);
    data.append("password_confirmation", formData.password_confirmation);
    data.append("avatar", photoFile);

    fetch("/signup", {
      method: "POST",
      body: data
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
          navigate("/");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }

  return (
    <div className="container">
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Wanderlust</h1>
          <h3>Enter your details to create an account.</h3>
          <div className="credentials">
            <input
              type="text"
              name="first_name"
              autoComplete="off"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className={`login-form-input ${errors.first_name ? "input-error" : ""
                }`}
            />
            {errors.first_name && (
              <span className="error-message">
                {Array.isArray(errors.first_name)
                  ? errors.first_name.join(", ")
                  : errors.first_name}
              </span>
            )}
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              autoComplete="off"
              value={formData.last_name}
              onChange={handleChange}
              className={`login-form-input ${errors.last_name ? "input-error" : ""
                }`}
            />
            {errors.last_name && (
              <span className="error-message">
                {Array.isArray(errors.last_name)
                  ? errors.last_name.join(", ")
                  : errors.last_name}
              </span>
            )}
            <input
              type="text"
              name="tsa_precheck"
              placeholder="TSA Precheck Number"
              autoComplete="off"
              value={formData.tsa_precheck}
              onChange={handleChange}
              className={`login-form-input ${errors.tsa_precheck ? "input-error" : ""
                }`}
            />
            {errors.tsa_precheck && (
              <span className="error-message">
                {Array.isArray(errors.tsa_precheck)
                  ? errors.tsa_precheck.join(", ")
                  : errors.tsa_precheck}
              </span>
            )}
            <input
              type="text"
              name="username"
              autoComplete="off"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={`login-form-input ${errors.username ? "input-error" : ""
                }`}
            />
            {errors.username && (
              <span className="error-message">
                {Array.isArray(errors.username)
                  ? errors.username.join(", ")
                  : errors.username}
              </span>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              className={`login-form-input ${errors.password ? "input-error" : ""
                }`}
            />
            {errors.password && (
              <span className="error-message">
                {Array.isArray(errors.password)
                  ? errors.password.join(", ")
                  : errors.password}
              </span>
            )}
            <input
              type="password"
              name="password_confirmation"
              placeholder="Password Confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              autoComplete="current-password"
              className={`login-form-input ${errors.password_confirmation ? "input-error" : ""
                }`}
            />
            {errors.password_confirmation && (
              <span className="error-message">
                {Array.isArray(errors.password_confirmation)
                  ? errors.password_confirmation.join(", ")
                  : errors.password_confirmation}
              </span>
            )}
            <input
              type="file"
              id="photo"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <button className="form-button" type="submit">
            Sign Up
          </button>
          <h5 className="form-text">
            Already a member?
            <br />
            <Link className="link login-link" to="/login">
              Login to your account.
            </Link>
          </h5>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
