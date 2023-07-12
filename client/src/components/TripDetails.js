import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ItineraryDaysContainer from "./ItineraryDaysContainer";
import { Link, useParams } from "react-router-dom";
import TripsListings from "./TripsListings";
import TravelDetails from "./TravelDetails";


function TripDetails({ onDeleteItineraryDate }) {
    const { id } = useParams();
    const { user } = useContext(UserContext);

    const trip = user.trips.find((trip) => trip.id === parseInt(id));

    if (!trip) {
        return <div>Loading...</div>;
    }

    const { destination_id } = trip;

    const itineraryDays = trip?.itinerary_days || [];

    return (
        <div className="side-bar">
            <TripsListings />
            <div className="trips">
                <TravelDetails trip={trip} />
                <div className="links">
                    <Link className="link" to={`/destinations/${destination_id}/trips/${id}/hotels`}>
                    <button type="submit">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                        Build Itinerary
                    </Link>
                    <Link className="link" to={`/trips/${id}/packing_list`}>
                        View Packing List
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
    );
}

export default TripDetails;