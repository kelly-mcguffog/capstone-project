import React from "react";
import { Link } from "react-router-dom";

function ItineraryActivity({ trip_id, activity }) {

    const { id, address, description, name, destination_id } = activity

    return (
        <div>
            <h3 className="itinerary-activity">{name}</h3>
            <h5>{address}</h5>
            <p className="description">{description}</p>
            <Link className="page-btn main-btn secondary-btn" to={`/destinations/${destination_id}/trips/${trip_id}/activities/${id}/details`}>
                View Details
            </Link>
        </div>
    )
}

export default ItineraryActivity;