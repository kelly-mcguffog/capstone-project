import React from "react";

function ItineraryHotel({ hotel }) {
    // console.log(hotel)
    const { address, average_price, description, name, rating } = hotel
    return (

        <div>
            <h3 className="itinerary-activity">{name}</h3>
            <h5>{address}</h5>
            <p>{description}</p>
        </div>
    )
}

export default ItineraryHotel;