import React from "react";
import ItineraryHotel from "./ItineraryHotel";
import ItineraryRestaurant from "./ItineraryRestaurant";
import ItineraryActivity from "./ItineraryActivity";

function ItineraryDay({day}){

    const {date, combined_itinerary_times} = day

    // console.log(day)

    // const restaurants = combined_itinerary_times.filter(time => time.restaurant)
    // console.log(restaurants)

    return(
        <>
        <div>{date}</div>
        <div>{combined_itinerary_times.map(i => {
            return(
                <div key={i.id}>
                <h1>{i.time}</h1>
                {i.hotel ? <ItineraryHotel hotel={i.hotel}/> : null}
                {i.restaurant ? <ItineraryRestaurant restaurant={i.restaurant}/> : null}
                {i.activity ? <ItineraryActivity activity={i.activity}/> : null}
                </div>
            )
        })}</div>
        </>
        
        
    )
}

export default ItineraryDay;