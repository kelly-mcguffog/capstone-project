import React from "react";
import ItineraryDay from "./ItineraryDay";

function ItineraryDaysContainer({ itinerary_days, trip }) {
  const generateDateRange = (startDate, endDate) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const dates = [];
    let current = new Date(startDate);

    const lastDate = new Date(endDate);
    lastDate.setHours(0, 0, 0, 0); // Reset the time portion of lastDate to 00:00:00

    while (current <= lastDate) {
      dates.push(current.toLocaleDateString(undefined, options));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

//   const formattedArrivalDate = new Date(trip.arrival).toLocaleDateString(undefined, options);
//   const formattedDepartureDate = new Date(trip.departure).toLocaleDateString(undefined, options);

//   const dateRange = generateDateRange(formattedDepartureDate, formattedArrivalDate);

//   console.log(dateRange)




const combinedItineraryDays = [];

itinerary_days.forEach((day) => {
  const existingDay = combinedItineraryDays.find((combinedDay) =>
    combinedDay.date === day.date
  );

  if (existingDay) {
    existingDay.combined_itinerary_times.push(...day.combined_itinerary_times);
  } else {
    combinedItineraryDays.push({ ...day });
  }
});

const filteredItineraryDays = combinedItineraryDays.filter((day) => {
  const itineraryTimesExist = day.combined_itinerary_times.length > 0;
  const restaurantExists = day.combined_itinerary_times.some(
    (time) => time.restaurant
  );
  const hotelExists = day.combined_itinerary_times.some((time) => time.hotel);
  const activityExists = day.combined_itinerary_times.some((time) => time.activity);

  return itineraryTimesExist || restaurantExists || hotelExists || activityExists;
});
// console.log(filteredItineraryDays)
  return (
    <div>
      {filteredItineraryDays.map((itinerary_day, index) => (
        <ItineraryDay
          key={index}
          trip={trip}
          itinerary_day={itinerary_day}
        />
      ))}
    </div>
  );
}

export default ItineraryDaysContainer;