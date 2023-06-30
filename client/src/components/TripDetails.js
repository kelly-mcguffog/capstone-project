import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { DestinationsContext } from "../context/DestinationsContext";
import ItineraryDaysContainer from "./ItineraryDaysContainer";
import { Link, useNavigate } from "react-router-dom";


function TripDetails({trips}){
    
    return(
        <>
        {trips.map(trip => {
            return(
            <div key={trip.id} className="trips">
                <div className="icons">
                    <div className="flight-info">
                        <i className="fa-solid fa-plane"></i>
                        <h1 className="trip-details-flight">{trip.origin_airport}</h1>
                    </div>

                    <div className="line"></div>
                    <div className="flight-info">
                        <i className="fa-solid fa-map-pin"></i>
                        <h1 className="trip-details-flight">{trip.destination_airport}</h1>
                    </div>
                </div>
            <div className="trip-details">
                {/* <div className="trip-info">
                    <div className="trip-text">
                        <h3 className="trip-details-title">From</h3>
                    </div>
                    <h3 className="trip-details-input">{trip.origin_airport}</h3>
                </div>
                <div className="trip-info">
                    <div className="trip-text">
                        <h3 className="trip-details-title">To</h3>
                    </div>
                    <h3 className="trip-details-input">{trip.destination_airport}</h3>
                </div> */}
                <div className="trip-info">
                    <div className="trip-text">
                        <h3 className="trip-details-title">Departure</h3>
                    </div>
                    <h3 className="trip-details-input">{trip.departure}</h3>
                </div>
                <div className="trip-info">
                    <div className="trip-text">
                        <h3 className="trip-details-title">Arrival</h3>
                    </div>
                    <h3 className="trip-details-input">{trip.arrival}</h3>
                </div>
                <div className="trip-info">
                <div className="trip-text">
                    <h3 className="trip-details-title">Flight Number</h3>
                    </div>
                    <h3 className="trip-details-input">{trip.flight_number}</h3>
                </div>
                <div className="trip-info">
                    <div className="trip-text">
                        <h3 className="trip-details-title">Confirmation Number</h3>
                    </div>
                    <h3 className="trip-details-input">{trip.confirmation_number}</h3>
                </div>
                </div>
                <ItineraryDaysContainer itinerary_days={trip.itinerary_days}/>
            </div>
            )
        })}
        </>
    )
}

export default TripDetails;