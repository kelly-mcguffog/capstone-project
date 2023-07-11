import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { DestinationsContext } from "../context/DestinationsContext";
import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";

function ActivityDetails({ activities }) {

    const { destinations } = useContext(DestinationsContext);
    const { destination_id, trip_id, id } = useParams()
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    })

    const activity = activities.find(activity => activity.id === parseInt(id))

    if (!activity) return <div>Loading...</div>

    if(!isLoaded) return <div>Loading...</div>
    
    return (
        <>
            <div className="header-img" style={{ backgroundImage: `url(${activity.photo})` }}>
            </div>
            <div className="background">
            <div className="back-link">
                <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
                <Link className="link" to={`/destinations/${destination_id}/trips/${trip_id}/activities`}>Return to Listings</Link>
            </div>
            <div className="details-wrapper">
                <div className="details-container">
                    <div className="info-details">
                        <h1 className="details-name">{activity.name}</h1>
                        <h5 className="star">{"★ ".repeat(activity.rating)}</h5>                   
                        </div>
                    <div>
                        <h5 className="price details-price">{activity.average_price}</h5>
                        <p>{activity.description}</p>
                    </div>
                </div>
                <hr className="line-details"></hr>
                <div className="map-details">
                    <Map longitude={activity.longitude} latitude={activity.latitude}/>
                    <p>{activity.address}</p>
                </div>
            </div>
            </div>
        </>
    );
}

export default ActivityDetails;