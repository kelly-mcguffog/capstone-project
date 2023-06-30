import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { DestinationsContext } from "../context/DestinationsContext";
import ItineraryDaysContainer from "./ItineraryDaysContainer";
import { Link, useNavigate } from "react-router-dom";


function TripID({trip}){
    const {destinations} = useContext(DestinationsContext)
    const {origin_airport, destination_airport, departure, arrival, flight_number, confirmation_number, itinerary_days, destination_id} = trip
    
    const destination = destinations ? destinations.find(destination => destination.id == destination_id) : null;
    const city = destination ? destination.city : null;
    const country = destination ? destination.country : null;

    const departureDate = new Date(arrival);
    
    const options = { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
      };

    const formattedDate = departureDate.toLocaleDateString(undefined, options);


    console.log(destination)
    
    return(
        <div className="trip">
        <h1 className="side-bar-header">My Trips</h1>
        <h3 className="trip-destination-name">{city}, {country}</h3>
        <h5 className="user-input">{formattedDate}</h5>
        <button>View Details</button>
        {/* <Link to={`/users/7/trips/${trip.id}`}>View Details</Link> */}
        </div>
    )
}

export default TripID;