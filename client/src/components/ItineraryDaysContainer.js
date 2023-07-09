import React from "react";
import ItineraryDay from "./ItineraryDay";

function ItineraryDaysContainer({ itinerary_days, trip, onDeleteItineraryDate }) {
    const combinedItineraryDays = {};
  
    itinerary_days.forEach((day) => {
      const date = new Date(day.date);
    //   const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  
    //   const formattedDate = adjustedDate.toISOString().split("T")[0];
  
      if (combinedItineraryDays.hasOwnProperty(date)) {
        combinedItineraryDays[date].combined_itinerary_times.push(
          ...day.combined_itinerary_times
        );
      } else {
        combinedItineraryDays[date] = { ...day };
      }
    });
  
    const filteredItineraryDays = Object.values(combinedItineraryDays).map((day) => {
      const uniqueCombinedItineraryTimes = [...new Set(day.combined_itinerary_times)];
  
      return {
        ...day,
        combined_itinerary_times: uniqueCombinedItineraryTimes,
      };
    });
  
    const nonEmptyFilteredItineraryDays = filteredItineraryDays.filter((day) => {
      const itineraryTimesExist = day.combined_itinerary_times.length > 0;
      const restaurantExists = day.combined_itinerary_times.some((time) => time.restaurant);
      const hotelExists = day.combined_itinerary_times.some((time) => time.hotel);
      const activityExists = day.combined_itinerary_times.some((time) => time.activity);
  
      return itineraryTimesExist || restaurantExists || hotelExists || activityExists;
    });
  
    return (
      <div>
        {nonEmptyFilteredItineraryDays.map((itinerary_day, index) => (
          <ItineraryDay
            key={index}
            trip={trip}
            itinerary_day={itinerary_day}
            onDeleteItineraryDate={onDeleteItineraryDate}
          />
        ))}
      </div>
    );
  }
  
  
  

export default ItineraryDaysContainer;