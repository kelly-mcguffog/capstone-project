import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import ItineraryDaysContainer from "./ItineraryDaysContainer";


function TripCard({trip}){
    const {origin_airport, destination_airport, departure, arrival, flight_number, confirmation_number, itinerary_days} = trip
    return(
        <>
        <div className="my-trips">
            <div id="trip-form" className="form-info">
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">From</h3>
                    </div>
                    <h3>{origin_airport}</h3>
                </div>
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">To</h3>
                    </div>
                    <h3>{destination_airport}</h3>
                </div>
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">Departure</h3>
                    </div>
                    <h3>{departure}</h3>
                </div>
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">Arrival</h3>
                    </div>
                    <h3>{arrival}</h3>
                </div>
                <div className="label">
                <div className="input-text">
                    <h3 className="input-title">Flight Number</h3>
                    </div>
                    <h3>{flight_number}</h3>
                </div>
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">Confirmation Number</h3>
                    </div>
                    <h3>{confirmation_number}</h3>
                </div>
                </div>
        </div>
        <ItineraryDaysContainer itinerary_days={itinerary_days}/>
        </>
    )
}

export default TripCard;