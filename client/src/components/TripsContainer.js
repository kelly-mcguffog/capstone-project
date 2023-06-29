import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TripCard from "./TripCard";


function TripsContainer({trips}){
    
    return(
        <>
        <div className="my-trips">
            {trips.map(trip => <TripCard key={trip.id} trip={trip}/>)}
        </div>
        </>
    )
}

export default TripsContainer;