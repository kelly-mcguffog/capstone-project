import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import TripsListings from "./TripsListings";
import NavBar from "./NavBar";
import UserMap from "./UserMap";
import { useLoadScript } from "@react-google-maps/api";
import { DestinationsContext } from "../context/DestinationsContext";

function EditProfileForm() {
    const { user, setUser } = useContext(UserContext);
    const { destinations } = useContext(DestinationsContext);
    const navigate = useNavigate();
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
  
    const [formData, setFormData] = useState({ ...user });
  
    if (!isLoaded) return <div>Loading...</div>;
  
    if (!user) {
      return null;
    }
  
    if (!destinations) {
      return <div>Loading destinations...</div>;
    }
  
    const { id, first_name, last_name, email, username, avatar, tsa_precheck } = formData;
  
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
        }
      };
  
    const handleSubmitEdit = (e) => {
        e.preventDefault();
      
        const formDataToSend = new FormData();
        if (formData.avatar.file) {
          formDataToSend.append("avatar", formData.avatar.file);
        }
        formDataToSend.append("first_name", formData.first_name);
        formDataToSend.append("last_name", formData.last_name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("username", formData.username);
        formDataToSend.append("tsa_precheck", formData.tsa_precheck);
      
        fetch(`/users/${id}`, {
          method: "PATCH",
          body: formDataToSend,
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setUser(data);
            navigate(`/users/${id}/trips`);
          });
      };
  

    return (
        <div className="side-bar">
            <div className="my-trips">
                <TripsListings />
            </div>
            <div className="trips welcome-header">
                <NavBar />
                <div className="map-wrapper">
                    {isLoaded ? (
                        <UserMap destinationMarkers={destinationMarkers} />
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
                <form className="profile-form-container" onSubmit={handleSubmitEdit}>
                    <div className="details-profile-container">
                        <div className="photo-upload">
                            <div className="details-img-wrapper">
                                <div className="details-img-container">
                                    <img className="details-img" alt={username} src={avatar.url}></img>
                                </div>
                            </div>
                            <input
                                type="file"
                                id="photo"
                                name="avatar"
                                accept="image/*"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="credentials profile-credentials">
                            <div className="profile-form-input">
                            <div className="input-text">
                                <h3 className="input-title">First Name</h3>
                            </div>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                autoComplete="off"
                                placeholder="First Name"
                                value={first_name}
                                onChange={handleChangeInput}
                                className="login-form-input"
                            />
                            </div>
                            <div className="profile-form-input">
                            <div className="input-text">
                                <h3 className="input-title">Last Name</h3>
                            </div>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                placeholder="Last Name"
                                autoComplete="off"
                                value={last_name}
                                onChange={handleChangeInput}
                                className="login-form-input"
                            />
                            </div>
                            <div className="profile-form-input">
                            <div className="input-text">
                                <h3 className="input-title">TSA Precheck Number</h3>
                            </div>
                            <input
                                type="text"
                                id="tsa_precheck"
                                name="tsa_precheck"
                                placeholder="TSA Precheck Number"
                                autoComplete="off"
                                value={tsa_precheck}
                                onChange={handleChangeInput}
                                className="login-form-input"
                            />
                            </div>
                            <div className="profile-form-input">
                            <div className="input-text">
                                <h3 className="input-title">Email</h3>
                            </div>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                autoComplete="off"
                                placeholder="Email"
                                value={email}
                                onChange={handleChangeInput}
                                className="login-form-input"
                            />
                            </div>
                            <div className="profile-form-input">
                            <div className="input-text">
                                <h3 className="input-title">Username</h3>
                            </div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                autoComplete="off"
                                placeholder="Username"
                                value={username}
                                onChange={handleChangeInput}
                                className="login-form-input"
                            />
                            </div>
                            <button className="form-button profile-btn" type="submit">
                                Update Profile
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfileForm;
