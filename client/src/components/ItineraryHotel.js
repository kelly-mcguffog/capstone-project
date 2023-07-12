import React from "react";

function ItineraryHotel({ hotel }) {
    
    const { address, description, name } = hotel
    
    return (
        <div>
            <h3 className="itinerary-activity">{name}</h3>
            <h5>{address}</h5>
            <p>{description}</p>
        </div>
    )
}

export default ItineraryHotel;