import React from "react";
import ItineraryTimes from "./ItineraryTimes";

function ItineraryDay({ itinerary_day, trip, onDeleteItineraryDate }) {
  if (!itinerary_day) {
    return null;
  }

  const { date, combined_itinerary_times } = itinerary_day;
  const itineraryDate = new Date(date);

  const adjustedDate = new Date(
    itineraryDate.getTime() +
      itineraryDate.getTimezoneOffset() * 60 * 1000
  );

  const formattedDate = adjustedDate.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div>
      <h1 className="time">{formattedDate}</h1>
      {combined_itinerary_times && combined_itinerary_times.map((itineraryTime, index) => (
        <ItineraryTimes
        key={`${itineraryTime}_${index}`}
          trip={trip}
          itinerary_day={itinerary_day}
          itinerary_time={itineraryTime}
          onDeleteItineraryDate={onDeleteItineraryDate}
        />
      ))}
    </div>
  );
}

export default ItineraryDay;
