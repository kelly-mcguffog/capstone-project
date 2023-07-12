import React from "react";

function ItineraryActivity({ activity }) {
    const { address, description, name } = activity
    return (
        <div>
            <h3 className="itinerary-activity">{name}</h3>
            <h5>{address}</h5>
            <p>{description}</p>
        </div>
    )
}

export default ItineraryActivity;