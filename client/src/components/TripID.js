import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { DestinationsContext } from "../context/DestinationsContext";
import ItineraryDaysContainer from "./ItineraryDaysContainer";
import { NavLink, useNavigate, useParams } from "react-router-dom";



function TripID({ trip, onDeleteTrip }) {
    const { destinations } = useContext(DestinationsContext);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
  
    const { id, arrival, destination_id } = trip;
  
    const destination = destinations
      ? destinations.find((destination) => destination.id == destination_id)
      : null;
    const city = destination ? destination.city : null;
    const country = destination ? destination.country : null;
  
    const departureDate = new Date(arrival);
  
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  
    const formattedDate = departureDate.toLocaleDateString(undefined, options);
  
    function handleDeleteTrip() {
      
        fetch(`/trips/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              console.log("Trip deleted successfully");
              onDeleteTrip(id)
      
              // Remove the deleted trip from the user's trips
            } else {
              console.log("Failed to delete trip");
            }
          })
          .catch((error) => {
            console.log("Error occurred while deleting trip", error);
          });
      }
  
    return (
      <div className="trip-listings">
        <NavLink className="trip-links" to={`/users/${user.id}/trips/${trip.id}`}>
          <div className="trip">
            <h3 className="trip-destination-name">
              {city}, {country}
            </h3>
            <h5 className="user-input">{formattedDate}</h5>
          </div>
        </NavLink>
        <div className="trip-icon">
            <i onClick={handleDeleteTrip} className="fa-solid fa-trash"></i>
          </div>
      </div>
    );
  }
  
  export default TripID;