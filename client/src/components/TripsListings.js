import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TripsContainer from "./TripsContainer";


function TripsListings() {
    const { user } = useContext(UserContext)
    const { trips } = user
    const [isShowing, setIsShowing] = useState(false)

    const handleShowIcons = () => {
        setIsShowing(showing => !showing)
    }

    return (
        <div className="side-bar">
            <div className="my-trips">
                <div className="listings">
                    <div className="trips-header-wrapper">
                    <h1 className="trips-header">My Trips</h1>
                    <i onClick={handleShowIcons} className="fa-solid fa-bars dropbtn"></i>
                    </div>
                    <TripsContainer trips={trips} isShowing={isShowing}/>
                </div>
            </div>
        </div>
    )
}

export default TripsListings;