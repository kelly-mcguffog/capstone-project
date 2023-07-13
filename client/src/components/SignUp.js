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
    email: "",
    username: "",
    password: "",
    passwordConfirmation: ""
  };

  const [formData, setFormData] = useState(initialState);

  function handleChange(event) {
    if (event.target.name === "avatar") {
      setPhotoFile(event.target.files[0]);
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("tsa_precheck", formData.tsa_precheck);
    data.append("email", formData.email);
    data.append("username", formData.username);
    data.append("password", formData.password);
    data.append("passwordConfirmation", formData.passwordConfirmation);
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
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="form-text head">Sign Up</h1>
        <h3 className="form-text subhead">Enter your details to create an account.</h3>
        {errors && (
          <ul className="error-message">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <div className="login-form">
          <div className="credentials">
            <input
              type="text"
              id="first_name"
              name="first_name"
              autoComplete="off"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="login-form-input"
            />
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              autoComplete="off"
              value={formData.last_name}
              onChange={handleChange}
              className="login-form-input"
            />
            <input
              type="text"
              id="tsa_precheck"
              name="tsa_precheck"
              placeholder="TSA Precheck Number"
              autoComplete="off"
              value={formData.tsa_precheck}
              onChange={handleChange}
              className="login-form-input"
            />
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="login-form-input"
            />
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
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
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              className="login-form-input"
            />
            <input
              type="password"
              id="password_confirmation"
              name="passwordConfirmation"
              placeholder="password confirmation"
              value={formData.passwordConfirmation}
              onChange={handleChange}
              autoComplete="current-password"
              className="login-form-input"
            />
            <div className="photo-upload">
            <label className="photo-upload-text" htmlFor="photo">Upload Photo:</label>
            <input
              type="file"
              id="photo"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
              // className="photo-upload"
            />
          </div>
          </div>
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
  );
}

export default SignUp;
