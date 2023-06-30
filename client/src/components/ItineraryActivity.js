import React from "react";

function ItineraryActivity({activity}){
    console.log(activity)
    const {address, description, name, price} = activity
    return(
        // <div className="itinerary-activity-listing">
        // <div className="icon">
        //     <i className="fa-solid fa-map"></i>
        // </div>
        <div>
            <h3 className="itinerary-activity">{name}</h3>
            <h5>{address}</h5>
            <p>{description}</p>
        </div>
        // </div>
    )
}

export default ItineraryActivity;