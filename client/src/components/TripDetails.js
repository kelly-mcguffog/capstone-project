import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { DestinationsContext } from "../context/DestinationsContext";
import ItineraryDaysContainer from "./ItineraryDaysContainer";
import { Link, useNavigate, useParams } from "react-router-dom";
import TripsListings from "./TripsListings";
import TravelDetails from "./TravelDetails";


function TripDetails(){

    const { id } = useParams();
    const {user} = useContext(UserContext)

    const trip = user.trips.find(trip => trip.id == id)
    
    const {itinerary_days, destination_id} = trip

    return(
        <div className="side-bar">
        <TripsListings />
        <div className="trips">
            <TravelDetails trip={trip}/>
            <Link to={`/destinations/${destination_id}/trips/${id}/hotels`}>Build Itinerary</Link>
            <ItineraryDaysContainer trip_id={id} itinerary_days={itinerary_days}/>
        </div>
        </div>
    )
}

export default TripDetails;