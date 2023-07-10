import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TripsContainer from "./TripsContainer";


function TripsListings() {
    const { user } = useContext(UserContext)
    const { trips } = user

    return (
        <div className="side-bar">
            <div className="my-trips">
                <div className="listings">
                    <h1 className="trips-header">My Trips</h1>
                    <TripsContainer trips={trips} />
                </div>
            </div>
        </div>
    )
}

export default TripsListings;