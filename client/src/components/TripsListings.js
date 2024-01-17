import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import TripsContainer from "./TripsContainer";


function TripsListings({isMobile}) {

    const { user } = useContext(UserContext)
    const { trips } = user
    const [isShowing, setIsShowing] = useState(false)
    const [isShowingTrips, setIsShowingTrips] = useState(false)

    const handleShowIcons = () => {
        setIsShowing(showing => !showing)
    }

    const handleShowTrips = () => {
        setIsShowingTrips(isShowingTrips => !isShowingTrips)
    }

    return (
        <>
            <div onClick={isMobile ? handleShowTrips : null} className={isMobile ? "navbar-header navbar-header-mobile" : "navbar-header"}>
                <h3 className={isMobile ? "nav-link" : ""}>My Trips</h3>
                <i onClick={handleShowIcons} className="fa-solid fa-bars dropbtn"></i>
                <i className={isShowingTrips ? "fa-solid fa-caret-up mobile-drop" : "fa-solid fa-caret-down mobile-drop"}></i>
            </div>
            <div className="desktop-trips">
                <TripsContainer trips={trips} isShowing={isShowing} />
            </div>
            {isShowingTrips ?
                <TripsContainer trips={trips} isShowing={isShowing} />
                : null}
        </>
    )
}

export default TripsListings;