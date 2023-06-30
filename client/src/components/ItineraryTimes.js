import React from "react";
import ItineraryHotel from "./ItineraryHotel";
import ItineraryRestaurant from "./ItineraryRestaurant";
import ItineraryActivity from "./ItineraryActivity";

function ItineraryTimes({itinerary}){
    const {time, hotel, restaurant, activity} = itinerary
    const itineraryTime = new Date(time);

    const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      };

    const formattedTime = itineraryTime.toLocaleTimeString(undefined, options);


    return(
        <>
        <div className="itinerary-activity-listing">
            <div className="icon">
                {activity ? <i className="fa-solid fa-map"></i> : null }
                {hotel ? <i className="fa-solid fa-hotel"></i> : null}
                {restaurant ? <i className="fa-solid fa-utensils"></i> : null}
            </div>
            <div>
            <h3 className="time">{formattedTime}</h3>
            {hotel ? <ItineraryHotel hotel={hotel}/> : null}
            {restaurant ? <ItineraryRestaurant restaurant={restaurant}/> : null}
            {activity ? <ItineraryActivity activity={activity}/> : null}
            </div>
            </div>
        </>
    )
}

export default ItineraryTimes;