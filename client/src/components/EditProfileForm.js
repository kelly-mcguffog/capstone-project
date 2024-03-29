import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import TripsSideBar from "./TripsSideBar";
import NavBar from "./NavBar";
import UserMap from "./UserMap";
import { useLoadScript } from "@react-google-maps/api";
import { DestinationsContext } from "../context/DestinationsContext";
import LoadingScreen from "./LoadingScreen";

function EditProfileForm() {
  const [errors, setErrors] = useState([])
  const { user, setUser } = useContext(UserContext);
  const { destinations } = useContext(DestinationsContext);
  const navigate = useNavigate();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const [isUploading, setIsUploading] = useState(false);


  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    username: user.username,
    avatar: user.avatar,
    tsa_precheck: user.tsa_precheck || "",
    password: "",
  });

  if (!isLoaded || !destinations) return <LoadingScreen />

  if (!user) {
    return null;
  }

  const { first_name, last_name, username, avatar, tsa_precheck } = formData;


  const destinationMarkers = user.trips.map((trip) => {
    const destination = destinations.find((dest) => dest.id === trip.destination_id);
    return { longitude: destination.longitude, latitude: destination.latitude };
  });

  const handleChangeInput = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((editFormData) => ({
          ...editFormData,
          avatar: {
            url: reader.result,
            file: file,
          },
        }));
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((editFormData) => ({
        ...editFormData,
        [e.target.name]: e.target.value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: null,
      }));
    }
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    setIsUploading(true);


    const formDataToSend = new FormData();
    if (formData.avatar.file) {
      formDataToSend.append("avatar", formData.avatar.file);
    }
    formDataToSend.append("first_name", formData.first_name);
    formDataToSend.append("last_name", formData.last_name);
    formDataToSend.append("username", formData.username);
    formDataToSend.append("tsa_precheck", formData.tsa_precheck);
    formDataToSend.append("password", formData.password);

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      body: formDataToSend,
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          return r.json().then((err) => Promise.reject(err.errors));
        }
      })
      .then((updatedUser) => {
        setIsUploading(false);
        setUser(updatedUser);
        navigate('/profile');
      })
  };

  return (
    <div className="side-bar">
      <TripsSideBar />
      <div className="profile-wrapper">
        <div className="desktop-nav">
          <NavBar />
        </div>
        <div className="map-wrapper">
          {isLoaded ? (
            <UserMap destinationMarkers={destinationMarkers} />
          ) : (
            <div className="loading">Loading...</div>
          )}
        </div>
        <form className="trips" onSubmit={handleSubmitEdit}>
          {isUploading && <LoadingScreen />}
          <div className="details profile-details">
            <div className="details-img-container">
              <img className="cropped-img" alt={username} src={avatar.url}></img>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleChangeInput}
              />
            </div>
            <div className="details-info">
              <div className="details-copy profile-form-details-copy">
                <div>
                  <h3>First Name</h3>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    autoComplete="off"
                    placeholder="First Name"
                    value={first_name}
                    onChange={handleChangeInput}
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
                </div>
                <div>
                  <h3>Last Name</h3>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Last Name"
                    autoComplete="off"
                    value={last_name}
                    onChange={handleChangeInput}
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
                </div>
                <div>
                  <h3>TSA Precheck Number</h3>
                  <input
                    type="text"
                    id="tsa_precheck"
                    name="tsa_precheck"
                    placeholder="TSA Precheck Number"
                    autoComplete="off"
                    value={tsa_precheck}
                    onChange={handleChangeInput}
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
                </div>
                <div>
                  <h3>Username</h3>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                    placeholder="Username"
                    value={username}
                    onChange={handleChangeInput}
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
                </div>

                <div className="btn-container">
                  <Link className="btn secondary-btn" to={'/profile'}>
                    Cancel
                  </Link>
                  <button className="btn primary-btn" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfileForm;