import React from "react";

function ItineraryHotel({hotel}){
    // console.log(hotel)
    const {address, average_price, description, name, rating} = hotel
    return(
        // <div className="itinerary-activity-listing">
        // <div className="icon">
        //     <i className="fa-solid fa-hotel"></i>
        // </div>
        <div>
            <h3 className="itinerary-activity">{name}</h3>
            <h5>{address}</h5>
            <p>{description}</p>
        </div>
        // </div>
    )
}

export default ItineraryHotel;