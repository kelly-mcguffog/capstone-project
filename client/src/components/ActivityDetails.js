import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { DestinationsContext } from "../context/DestinationsContext";
import { AllUsersContext } from "../context/AllUsersContext";

import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";

function ActivityDetails({ activities }) {

    const { destinations } = useContext(DestinationsContext);
    const { users } = useContext(AllUsersContext);
    const { destination_id, trip_id, id } = useParams()
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    const activity = activities.find(activity => activity.id === parseInt(id))

    if (!activity) return <div>Loading...</div>

    if(!isLoaded) return <div>Loading...</div>

    const {photo, name, rating, description, price, longitude, latitude, address, duration, url} = activity

    console.log(users)
    
    return (
        <>
            <div className="header-img" style={{ backgroundImage: `url(${photo})` }}>
            </div>
            <div className="background">
            <div className="back-link">
                <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
                <Link className="link" to={`/destinations/${destination_id}/trips/${trip_id}/activities`}>Return to Listings</Link>
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
                        <Link className="page-btn main-btn" to={`/destinations/${destination_id}/trips/${trip_id}/activities/${activity.id}`}>Add to Itinerary</Link>
                    </div>
                </div>
                <hr className="line-details"></hr>
                <div className="map-details">
                    <Map longitude={longitude} latitude={latitude}/>
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
                    <a className="link" href={`${url}`} target="_blank"><p>Visit Website</p></a>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default ActivityDetails;