import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AllUsersContext } from "../context/AllUsersContext";

import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";
import UsersCheckIn from "./UsersCheckIn";

function ActivityDetails({ activities }) {

    const { users } = useContext(AllUsersContext);
    const { destination_id, trip_id, id } = useParams()
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    const activity = activities.find(activity => activity.id === parseInt(id))

    if (!activity) return <div>Loading...</div>

    if (!isLoaded) return <div>Loading...</div>

    if (!users) return <div>Loading...</div>;

    const { photo, name, rating, description, price, longitude, latitude, address, duration, url } = activity

    const allUsers = users.flatMap((user) =>
        user.trips.flatMap((trip) =>
            trip.itinerary_days.flatMap((day) =>
                day.combined_itinerary_times
                    .filter((time) => time.activity && time.activity.id && time.activity.id.toString() === id)
                    .map(() => user)
            )
        )
    );

    const getItineraryUrl = () => {
        if (trip_id !== undefined) {
            return `/destinations/${destination_id}/trips/${trip_id}/activities/${id}`;
        } else {
            return `/destinations/${destination_id}/activities/${id}`;
        }
    };

    const getListingsUrl = () => {
        if (trip_id !== undefined) {
            return `/destinations/${destination_id}/trips/${trip_id}/activities`;
        } else {
            return `/destinations/${destination_id}/activities`;
        }
    };

    return (
        <>
            <div className="header-img" style={{ backgroundImage: `url(${photo})` }}>
            </div>
            <div className="background">
                <div className="back-link">
                    <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
                    <Link className="link" to={getListingsUrl()}>
                        Return to Listings
                    </Link>
                </div>
                <div className="details-wrapper">
                    <div className="details-container">
                        <div className="info-details">
                            <h1 className="details-name">{name}</h1>
                            <h5 className="star">{"★ ".repeat(rating)}</h5>
                        </div>
                        <div>
                            <p>{description}</p>
                            <h5>{price}</h5>
                            <Link className="page-btn main-btn" to={getItineraryUrl()}>
                                Add to Itinerary
                            </Link>
                        </div>
                    </div>
                    <hr className="line-details"></hr>
                    <div className="map-details">
                        <Map longitude={longitude} latitude={latitude} />
                        <UsersCheckIn allUsers={allUsers} />
                        <div className="small-details">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                            <p>{address}</p>
                        </div>
                        <div className="small-details">
                            <i className="fa-solid fa-clock"></i>
                            <p>{duration}</p>
                        </div>
                        <div className="small-details">
                            <i className="fa-solid fa-up-right-from-square"></i>
                            <a className="link" href={`${url}`} rel="noreferrer" target="_blank"><p>Visit Website</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ActivityDetails;