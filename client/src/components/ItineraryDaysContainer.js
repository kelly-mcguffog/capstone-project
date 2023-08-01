import React from "react";
import ItineraryDay from "./ItineraryDay";


function ItineraryDaysContainer({ itinerary_days, trip, onDeleteItineraryDate }) {

    const nonEmptyFilteredItineraryDays = [];

    itinerary_days.forEach((day) => {
        const existingItineraryDay = nonEmptyFilteredItineraryDays.find(
            (itineraryDay) => itineraryDay.date === day.date
        );

        if (existingItineraryDay) {
            const existingTimes = existingItineraryDay.combined_itinerary_times.map(
                (time) => time.id
            );
            const newTimes = day.combined_itinerary_times.filter(
                (time) => !existingTimes.includes(time.id)
            );

            existingItineraryDay.combined_itinerary_times.push(...newTimes);
        } else {
            const newItineraryDay = {
                ...day,
                combined_itinerary_times: [...day.combined_itinerary_times],
            };
            nonEmptyFilteredItineraryDays.push(newItineraryDay);
        }
    });

    return (
        <>
            {nonEmptyFilteredItineraryDays.map((itinerary_day) => (
                <ItineraryDay
                    key={`itinerary_day_${itinerary_day.id}`}
                    trip={trip}
                    itinerary_day={itinerary_day}
                    onDeleteItineraryDate={onDeleteItineraryDate}
                />
            ))}
        </>
    );
}

export default ItineraryDaysContainer;
