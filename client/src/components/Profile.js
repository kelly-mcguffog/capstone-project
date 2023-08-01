import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import TripsListings from "./TripsListings";
import NavBar from "./NavBar";
import UserMap from "./UserMap";
import { useLoadScript } from "@react-google-maps/api";
import { DestinationsContext } from "../context/DestinationsContext";

function Profile() {
    const { user } = useContext(UserContext);
    const { destinations } = useContext(DestinationsContext);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) return <div className="loading">Loading...</div>;


    if (!user) {
        return null;
    }

    if (!destinations) {
        return <div className="loading">Loading...</div>;
    }

    const { first_name, last_name, email, username, avatar, trips, tsa_precheck } = user;

    const destinationMarkers = trips.map((trip) => {
        const destination = destinations.find((dest) => dest.id === trip.destination_id);
        return { longitude: destination.longitude, latitude: destination.latitude };
    });

    return (
        <div className="side-bar">
            <div className="mobile-nav">
                <NavBar />
            </div>
            <div className="my-trips">
                <TripsListings />
            </div>
            <div className="trips welcome-header">
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
                <div className="details profile-container">
                    <div className="details-img-wrapper">
                        <div className="details-img-container">
                            <img className="details-img" alt={username} src={avatar.url}></img>
                        </div>
                    </div>
                    <div className="details-info-destinations">
                        <div className="profile-info-details">
                            <h2>{first_name} {last_name}</h2>
                            <Link to={`/users/${user.id}/profile`}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                        </div>
                        <div className="details-copy">
                            <p><i className="fa-solid fa-envelope"></i> {email}</p>
                            <p><i className="fa-solid fa-user"></i> {username}</p>
                            <p><strong>TSA Precheck:</strong>{tsa_precheck}</p>
                            <div className="btn-container">
                                <Link className="page-btn main-btn">
                                    Follow
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
