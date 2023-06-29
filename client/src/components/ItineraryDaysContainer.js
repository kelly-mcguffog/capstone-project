import React from "react";
import ItineraryDay from "./ItineraryDay";

function ItineraryDaysContainer({itinerary_days}){
    // console.log(itinerary_days)
    return(
        <div>
            {itinerary_days.map(day => <ItineraryDay key={day.id} day={day}/>)}
        </div>
    )
}

export default ItineraryDaysContainer;