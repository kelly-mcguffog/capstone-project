import React from "react";

function ItineraryRestaurant({restaurant}){
    console.log(restaurant)
    const {address, average_price, cuisine, description, name, rating} = restaurant
    return(
        // <div className="itinerary-activity-listing">
        // <div className="icon">
        //     <i className="fa-solid fa-utensils"></i>
        // </div>
        <div>
            <h3 className="itinerary-activity">{name}</h3>
            <h5>{address}</h5>
            <h5>{cuisine}</h5>
            <p>{description}</p>
        </div>
        // </div>
    )
}

export default ItineraryRestaurant;