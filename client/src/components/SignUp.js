import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)
  const [errors, setErrors] = useState([]);

  const initialState = {
    first_name: "",
    last_name: "",
    tsa_precheck: "",
    email: "",
    username: "",
    password: "",
    passwordConfirmation: ""
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
    fetch("/signup", {
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
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="container signup">
      <form onSubmit={handleSubmit}>
        <h1 className="form-text head">Sign Up</h1>
        <h3 className="form-text subhead">Enter your details to create an account.</h3>
        <ul className="error-message">
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
        <input
          type="text"
          id="first_name"
          name="first_name"
          autoComplete="off"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Last Name"
          autoComplete="off"
          value={formData.last_name}
          onChange={handleChange}
        />
        <input
          type="text"
          id="tsa_precheck"
          name="tsa_precheck"
          placeholder="TSA Precheck Number"
          autoComplete="off"
          value={formData.tsa_precheck}
          onChange={handleChange}
        />
        <input
          type="text"
          id="email"
          name="email"
          autoComplete="off"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          id="username"
          name="username"
          autoComplete="off"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <input
          type="password"
          id="password_confirmation"
          name="passwordConfirmation"
          placeholder="password confirmation"
          value={formData.passwordConfirmation}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <button className="form-button" type="submit">Sign Up</button>
        <h5 className="form-text">Already a member?<br></br>
          <Link className="link" to="/login">Login to your account.</Link></h5>
      </form>
    </div>
  );
}

export default SignUp;