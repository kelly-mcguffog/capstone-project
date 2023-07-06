import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TripID from "./TripID";


function TripsContainer({trips}){
    
    return(
        <>
        <div className="trips-container">
            {trips.map(trip => <TripID key={trip.id} trip={trip} />)}
        </div>
        </>
    )
}

export default TripsContainer;