import React from "react";


function TravelDetails({trip}){
    
    const {origin_airport, destination_airport, departure, arrival, flight_number, confirmation_number} = trip

    const departureDate = new Date(departure);
    const arrivalDate = new Date(arrival);

    const dateFormatOptions = { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
    };

    const formattedDepartureDate = departureDate.toLocaleDateString(undefined, dateFormatOptions);

    const formattedArrivalDate = arrivalDate.toLocaleDateString(undefined, dateFormatOptions);

    const timeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    };

    const formattedDepartureTime = departureDate.toLocaleTimeString(undefined, timeFormatOptions);
    const formattedArrivalTime = arrivalDate.toLocaleTimeString(undefined, timeFormatOptions);


    return(
<>
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
            </>
    )
}

export default TravelDetails;