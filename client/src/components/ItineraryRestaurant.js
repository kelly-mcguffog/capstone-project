import React from "react";
import { Link } from "react-router-dom";

function ItineraryRestaurant({ trip_id, restaurant }) {

    const { id, address, cuisine, description, name, destination_id } = restaurant

    return (
        <>
            <div className="itinerary-details">
                <h3>{name}</h3>
                <h5>{address}</h5>
                <h5>{cuisine}</h5>
                <p>{description}</p>
            </div>
            <div>
                <Link className="btn secondary-btn" to={`/destinations/${destination_id}/trips/${trip_id}/restaurants/${id}/details`}>
                    View Details
                </Link>
            </div>
        </>
    )
}

export default ItineraryRestaurant;