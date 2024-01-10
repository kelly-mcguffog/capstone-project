import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ItineraryDaysContainer from "./ItineraryDaysContainer";
import { Link, useParams } from "react-router-dom";
import TravelDetails from "./TravelDetails";
import LoadingScreen from "./LoadingScreen";
import ReturnToListings from "./ReturnToListings";
import TripsSideBar from "./TripsSideBar";
import NavBar from "./NavBar";


function TripDetails({ onDeleteItineraryDate }) {
    const { id } = useParams();
    const { user } = useContext(UserContext);

    if (!user?.trips) {
        return <LoadingScreen />
    }

    const trip = user.trips.find((trip) => trip.id === parseInt(id));

    if (!trip) {
        return <LoadingScreen />
    }

    const { destination_id } = trip;

    const itineraryDays = trip?.itinerary_days || [];

    return (

        <div className="side-bar">
            <TripsSideBar />
            <div className="trips-wrapper">
                <div className="desktop-nav">
                    <NavBar />
                </div>
                <div className="trips">
                    <TravelDetails trip={trip} />
                    <div className="back-link-btn">
                        <ReturnToListings destination_id_build={destination_id} trip_id_build={id} />
                        <div className="back-link-btn">
                            <Link className="link" to={`/trips/${id}/packing_list`}>
                                <p className="text">
                                    View Packing List
                                </p>
                                <i className="fa-sharp fa-solid fa-circle-chevron-right nav-arrow"></i>
                            </Link>
                        </div>
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