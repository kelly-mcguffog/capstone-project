import React from "react";


function TravelDetails({ trip }) {

    const { origin_airport, destination_airport, outbound_flight, return_flight, outbound_flight_number, return_flight_number, confirmation_number } = trip

    const outBoundDate = new Date(outbound_flight);
    const returnDate = new Date(return_flight);

    const dateFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const formattedOutboundeDate = outBoundDate.toLocaleDateString(undefined, dateFormatOptions);

    const formattedReturnDate = returnDate.toLocaleDateString(undefined, dateFormatOptions);

    const timeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    };

    const formattedOutboundTime = outBoundDate.toLocaleTimeString(undefined, timeFormatOptions);
    const formattedReturnTime = returnDate.toLocaleTimeString(undefined, timeFormatOptions);

    return (
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
            <div className="trip-info">
                <div className="details-info">
                    <h2>Outbound</h2>
                    <h3 className="trip-details-title">{formattedOutboundeDate} at {formattedOutboundTime}</h3>
                    <h3 className="trip-details-title">Flight Number: {outbound_flight_number}</h3>
                    <h3 className="trip-details-title">Confirmation Number: {confirmation_number}</h3>
                </div>
                <div className="details-info">
                    <h2>Return</h2>
                    <h3 className="trip-details-title">{formattedReturnDate} at {formattedReturnTime}</h3>
                    <h3 className="trip-details-title">Flight Number: {return_flight_number}</h3>
                    <h3 className="trip-details-title">Confirmation Number: {confirmation_number}</h3>
                </div>
            </div>
        </>
    )
}

export default TravelDetails;