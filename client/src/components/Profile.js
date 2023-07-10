import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TripsContainer from "./TripsContainer";
import TripsListings from "./TripsListings";


function Profile() {
    const { user } = useContext(UserContext)
    const { trips } = user

    console.log(user)
    return (
        <div className="side-bar">
            <div className="my-trips">
                <TripsListings />
            </div>
            <div className="trips welcome-header">
                <h3 className="greeting">Welcome back, {user.first_name}!</h3>
                <h1 className="greeting">Let's plan your vacation</h1>
            </div>
        </div>
    )
}

export default Profile;