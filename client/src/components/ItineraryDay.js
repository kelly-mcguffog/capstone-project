import React from "react";
import ItineraryTimes from "./ItineraryTimes";

function ItineraryDay({ itinerary_day, trip, onDeleteItineraryDate }) {

  if (!itinerary_day) {
    return null;
  }

  const { date, combined_itinerary_times } = itinerary_day;
  const itineraryDate = new Date(date);

  combined_itinerary_times.sort((a, b) => a.time - b.time);

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
    <div className="itinerary-info">
      <h2 className="time">{formattedDate}</h2>
      {combined_itinerary_times &&
        combined_itinerary_times.map((itineraryTime) => (
          <ItineraryTimes
            key={itineraryTime.id}
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
