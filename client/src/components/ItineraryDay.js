import React from "react";
import ItineraryTimes from "./ItineraryTimes";

function ItineraryDay({ itinerary_day, trip }) {
  if (!itinerary_day) {
    return null; // or handle the case when itinerary_day is undefined
  }

  const { date, combined_itinerary_times } = itinerary_day;

  const itineraryDate = new Date(date);
    
  const options = { 
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    };

  const formattedDate = itineraryDate.toLocaleDateString(undefined, options);

  console.log(combined_itinerary_times);


  return (
    <div>
      <h1 className="time">{formattedDate}</h1>
      {combined_itinerary_times && combined_itinerary_times.map((itineraryTime, index) => (
        <ItineraryTimes
        key={`${itineraryTime}_${index}`}
          trip={trip}
          itinerary_day={itinerary_day}
          itinerary_time={itineraryTime}
        />
      ))}
    </div>
  );
}

export default ItineraryDay;
