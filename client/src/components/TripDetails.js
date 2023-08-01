import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import ItineraryDaysContainer from "./ItineraryDaysContainer";
import { Link, useParams } from "react-router-dom";
import TripsListings from "./TripsListings";
import TravelDetails from "./TravelDetails";
import NavBar from "./NavBar";


function TripDetails({ onDeleteItineraryDate }) {
    const { id } = useParams();
    const { user } = useContext(UserContext);

    if (!user?.trips) {
        return <div className="loading">Loading...</div>;
    }

    const trip = user.trips.find((trip) => trip.id === parseInt(id));

    if (!trip) {
        return <div className="loading">Loading...</div>;
    }

    const { destination_id } = trip;

    const itineraryDays = trip?.itinerary_days || [];

    return (

        <div className="side-bar">
            <div className="mobile-nav">
                <NavBar />
            </div>
            <div className="my-trips">
                <TripsListings />
            </div>
            <div className="trips welcome-header">
                <div className="desktop-nav">
                    <NavBar />
                </div>
                <div className="trips">
                    <TravelDetails trip={trip} />
                    <div className="links">
                        <Link className="link" to={`/destinations/${destination_id}/trips/${id}/hotels`}>
                            <button type="submit">
                                <i className="fa-solid fa-plus"></i>
                            </button>
                            <p className="text">
                                Build Itinerary
                            </p>
                        </Link>
                        <Link className="link" to={`/trips/${id}/packing_list`}>
                            <p className="text">
                                View Packing List
                            </p>
                            <i className="fa-sharp fa-solid fa-circle-chevron-right nav-arrow"></i>
                        </Link>
                    </div>
                    <ItineraryDaysContainer
                        trip={trip}
                        itinerary_days={itineraryDays}
                        onDeleteItineraryDate={onDeleteItineraryDate}
                    />
                </div>
            </div>
        </div>
    );
}

export default TripDetails;