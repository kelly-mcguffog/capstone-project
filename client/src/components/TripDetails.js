import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { DestinationsContext } from "../context/DestinationsContext";
import ItineraryDaysContainer from "./ItineraryDaysContainer";
import { Link, useNavigate, useParams } from "react-router-dom";
import TripsListings from "./TripsListings";
import TravelDetails from "./TravelDetails";


function TripDetails({ onDeleteItineraryDate }) {
    const { id } = useParams();
    const { user } = useContext(UserContext);

    const trip = user.trips.find((trip) => trip.id == id);

    if (!trip) {
        return <div>Loading...</div>;
    }

    const { itinerary_days, destination_id } = trip;

    const itineraryDays = trip?.itinerary_days || [];

    return (
        <div className="side-bar">
            <TripsListings />
            <div className="trips">
                <TravelDetails trip={trip} />
                <div className="links">
                    <Link to={`/destinations/${destination_id}/trips/${id}/hotels`}>
                        Build Itinerary
                    </Link>
                    <Link to={`/trips/${id}/packing_list`}>
                        Build Packing List
                    </Link>
                </div>
                <ItineraryDaysContainer
                    trip={trip}
                    itinerary_days={itineraryDays}
                    onDeleteItineraryDate={onDeleteItineraryDate}
                />
            </div>
        </div>
    );
}

export default TripDetails;