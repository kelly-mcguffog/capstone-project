import React from "react";
import ItineraryHotel from "./ItineraryHotel";
import ItineraryRestaurant from "./ItineraryRestaurant";
import ItineraryActivity from "./ItineraryActivity";
import ItineraryTimes from "./ItineraryTimes";

function ItineraryDay({day}){

    const {date, combined_itinerary_times} = day

    const departureDate = new Date(date);
    
    const options = { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
      };

    const formattedDate = departureDate.toLocaleDateString(undefined, options);


    return(
        <>
        <h1 className="time">{formattedDate}</h1>
        <div>{combined_itinerary_times.map(i => {
            return <ItineraryTimes key={i.id} itinerary={i}/>
        })}</div>
        </>
        
        
    )
}

export default ItineraryDay;