import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { DestinationsContext } from "../context/DestinationsContext";
import ItineraryDaysContainer from "./ItineraryDaysContainer";
import { Link, useNavigate } from "react-router-dom";
import TripDetails from "./TripDetails";


function TripsDetailsContainer({trips}){

    return(
        <div>
        {trips.map(trip => {
            return <TripDetails key={trip.id} trip={trip}/>
        })}
        </div>
    )
}

export default TripsDetailsContainer;