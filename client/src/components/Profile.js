import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import UserMap from "./UserMap";
import { useLoadScript } from "@react-google-maps/api";
import { DestinationsContext } from "../context/DestinationsContext";
import LoadingScreen from "./LoadingScreen";
import TripsSideBar from "./TripsSideBar";

function Profile() {
    const { user } = useContext(UserContext);
    const { destinations } = useContext(DestinationsContext);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded || !destinations) return <LoadingScreen />

    if (!user) {
        return null;
    }

    const { first_name, last_name, username, avatar, trips, tsa_precheck } = user;
    const decodedUrl = decodeURIComponent(avatar.url);


    const destinationMarkers = trips.map((trip) => {
        const destination = destinations.find((dest) => dest.id === trip.destination_id);
        return { longitude: destination.longitude, latitude: destination.latitude };
    });

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
                <div className="trips">
                    <div className="details profile-details">
                        <div className="details-img-container">
                            <img alt={username} className="cropped-img" src={decodedUrl}></img>
                        </div>
                        <div className="details-info">
                            <div className="details-copy">
                                <div className="info-details">
                                    <h3>{first_name} {last_name}</h3>
                                    <Link to={`/edit`}>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Link>
                                </div>
                                <p><strong>Username:</strong> {username}</p>
                                <p><strong>TSA Precheck:</strong> {tsa_precheck}</p>
                                <small><em>social media feature coming soon</em></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
