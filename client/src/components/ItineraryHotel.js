import React from "react";
import { Link } from "react-router-dom";

function ItineraryHotel({ trip_id, hotel }) {

    const { id, address, short_description, name, destination_id } = hotel

    return (
        <div>
            <h3 className="itinerary-activity">{name}</h3>
            <h5>{address}</h5>
            <p className="description">{short_description}</p>
            <Link className="page-btn main-btn secondary-btn" to={`/destinations/${destination_id}/trips/${trip_id}/hotels/${id}/details`}>
                View Details
            </Link>
        </div>
    )
}

export default ItineraryHotel;