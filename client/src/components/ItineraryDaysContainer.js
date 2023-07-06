import React from "react";
import ItineraryDay from "./ItineraryDay";

function ItineraryDaysContainer({itinerary_days, trip_id}){
    // console.log(itinerary_days)
    return(
        <div>
            {itinerary_days.map(day => <ItineraryDay key={day.id} itinerary_day={day} trip_id={trip_id}/>)}
        </div>
    )
}

export default ItineraryDaysContainer;