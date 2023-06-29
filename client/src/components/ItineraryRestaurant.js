import React from "react";

function ItineraryRestaurant({restaurant}){
    console.log(restaurant)
    return(
        <div>
            <h1>{restaurant.name}</h1>
        </div>
    )
}

export default ItineraryRestaurant;