import React from "react";
import { Link } from "react-router-dom";

function ItineraryRestaurant({ trip_id, restaurant }) {

    const { id, address, cuisine, description, name, destination_id } = restaurant

    return (

        <div>
            <h3 className="itinerary-activity">{name}</h3>
            <h5>{address}</h5>
            <h5>{cuisine}</h5>
            <p className="description">{description}</p>
            <Link className="page-btn main-btn secondary-btn" to={`/destinations/${destination_id}/trips/${trip_id}/restaurants/${id}/details`}>
                View Details
            </Link>
        </div>
    )
}

export default ItineraryRestaurant;