import React from "react";

function ItineraryHotel({hotel}){
    console.log(hotel)
    return(
        <div>
            <h1>{hotel.name}</h1>
        </div>
    )
}

export default ItineraryHotel;