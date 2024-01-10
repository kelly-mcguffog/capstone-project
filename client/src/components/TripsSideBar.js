import React from "react";
import TripsListings from "./TripsListings";
import NavBar from "./NavBar";


function TripsSideBar() {

    return (
        <>
            <div className="mobile-nav">
                <NavBar />
            </div>
            <div className="my-trips">
                <TripsListings />
            </div>
        </>
    );
}

export default TripsSideBar;