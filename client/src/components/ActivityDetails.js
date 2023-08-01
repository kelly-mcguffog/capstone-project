import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AllUsersContext } from "../context/AllUsersContext";
import { UserContext } from "../context/UserContext";

import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";
import UsersCheckIn from "./UsersCheckIn";

function ActivityDetails() {

    const [activities, setActivities] = useState([])
    const { users } = useContext(AllUsersContext);
    const { user } = useContext(UserContext);
    const { destination_id, trip_id, id } = useParams()
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    useEffect(() => {
        fetch("/activities")
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const activity = activities.find(activity => activity.id === parseInt(id))

    if (!activity) return <div className="loading">Loading...</div>;


    if (!isLoaded) return <div className="loading">Loading...</div>;


    if (!users) return <div className="loading">Loading...</div>;


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
                    <div className="back-link-btn">
                        <Link className="link" to={getListingsUrl()}>
                            <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
                            <p className="text">
                                Return to Listings
                            </p>
                        </Link>
                    </div>
                    {trip_id ?
                        <div className="back-link-btn">
                            <Link className="link" to={`/users/${user.id}/trips/${trip_id}`}>
                                <p className="text">
                                    Return to Trip
                                </p>
                                <i className="fa-sharp fa-solid fa-circle-chevron-right nav-arrow"></i>
                            </Link>
                        </div>
                        : null}
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