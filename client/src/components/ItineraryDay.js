import React, {useContext} from "react";
import ItineraryTimes from "./ItineraryTimes";
import { UserContext } from "../context/UserContext";

function ItineraryDay({itinerary_day, trip_id}){

    const {id, date, combined_itinerary_times} = itinerary_day
    const { user } = useContext(UserContext);

    const departureDate = new Date(date);
    
    const options = { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
      };

    const formattedDate = departureDate.toLocaleDateString(undefined, options);

    
    const handleDeleteReview = () => {
        fetch(`/users/${user.id}/trips/${trip_id}/itinerary_days/${id}`, {
          method: 'DELETE'
        })
      }
    
    return(
        <>
        <div onClick={handleDeleteReview}>
            <h1 className="time">{formattedDate}</h1>
        </div>
        <div>{combined_itinerary_times.map(i => {
            return <ItineraryTimes key={i.id} trip_id={trip_id} itinerary_day={itinerary_day} itinerary_time={i}/>
        })}</div>
        </>
        
        
    )
}

export default ItineraryDay;