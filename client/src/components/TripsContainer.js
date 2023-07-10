import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TripID from "./TripID";


function TripsContainer({trips}){
    const {user, setUser} = useContext(UserContext)
    function handleDeleteTrip(tripId) {
        const updatedTrips = trips.filter((trip) => trip.id !== tripId);
        setUser({ ...user, trips: updatedTrips });
      }

    return(
        <>
        <div className="trips-container">
            {trips.map(trip => <TripID key={trip.id} trip={trip} onDeleteTrip={handleDeleteTrip}/>)}
        </div>
        </>
    )
}

export default TripsContainer;