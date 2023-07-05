import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { DestinationsContext } from "../context/DestinationsContext";
import ItineraryDaysContainer from "./ItineraryDaysContainer";
import { Link, useNavigate } from "react-router-dom";


function TripDetails({trip}){


    
    const {id, origin_airport, destination_airport, departure, arrival, flight_number, confirmation_number, itinerary_days, destination_id} = trip

    const departureDate = new Date(departure);
    const arrivalDate = new Date(arrival);

  // Define options for date formatting
    const dateFormatOptions = { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
    };

    // Format the date
    const formattedDepartureDate = departureDate.toLocaleDateString(undefined, dateFormatOptions);

    const formattedArrivalDate = arrivalDate.toLocaleDateString(undefined, dateFormatOptions);

  // Define options for time formatting
    const timeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    };

  // Format the time
    const formattedDepartureTime = departureDate.toLocaleTimeString(undefined, timeFormatOptions);
    const formattedArrivalTime = arrivalDate.toLocaleTimeString(undefined, timeFormatOptions);


    return(
        <div className="trips">
            <div className="icons">
                <div className="flight-info">
                    <i className="fa-solid fa-plane"></i>
                    <h1 className="trip-details-flight">{origin_airport}</h1>
                </div>
                <div className="line"></div>
                <div className="flight-info">
                    <i className="fa-solid fa-map-pin"></i>
                    <h1 className="trip-details-flight">{destination_airport}</h1>
                </div>
            </div>
        <div className="trip-details">
            <div className="trip-info">
                <div className="trip-text">
                    <h3 className="trip-details-title">Arrival</h3>
                </div>
                <h3 className="trip-details-input">{formattedArrivalDate} at {formattedArrivalTime}</h3>
            </div>
            <div className="trip-info">
                <div className="trip-text">
                    <h3 className="trip-details-title">Departure</h3>
                </div>
                <h3 className="trip-details-input">{formattedDepartureDate} at {formattedDepartureTime}</h3>
            </div>
            <div className="trip-info">
                <div className="trip-text">
                    <h3 className="trip-details-title">Flight Number</h3>
                    </div>
                    <h3 className="trip-details-input">{flight_number}</h3>
                </div>
                <div className="trip-info">
                    <div className="trip-text">
                        <h3 className="trip-details-title">Confirmation Number</h3>
                    </div>
                    <h3 className="trip-details-input">{confirmation_number}</h3>
                </div>
            </div>
            <Link to={`/destinations/${destination_id}/trips/${id}/hotels`}>Build Itinerary</Link>
            <ItineraryDaysContainer itinerary_days={itinerary_days}/>
        </div>
    )
}

export default TripDetails;