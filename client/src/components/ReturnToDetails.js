import React from "react";
import { useParams, Link } from "react-router-dom";

function ReturnToDetails({ activity_id, hotel_id, restaurant_id }) {
  const { trip_id, destination_id } = useParams();


  const getDetailsUrl = () => {
    if (trip_id !== undefined && activity_id !== undefined && hotel_id === undefined && restaurant_id === undefined) {
      return `/destinations/${destination_id}/trips/${trip_id}/activities/${activity_id}/details`;
    } else if (trip_id === undefined && activity_id !== undefined && hotel_id === undefined && restaurant_id === undefined) {
      return `/destinations/${destination_id}/activities/${activity_id}/details`;
    } else if (trip_id !== undefined && restaurant_id !== undefined && hotel_id === undefined && activity_id === undefined) {
      return `/destinations/${destination_id}/trips/${trip_id}/restaurants/${restaurant_id}/details`;
    } else if (trip_id === undefined && restaurant_id !== undefined && hotel_id === undefined && activity_id === undefined) {
      return `/destinations/${destination_id}/restaurants/${restaurant_id}/details`;
    } else if (trip_id !== undefined && hotel_id !== undefined && restaurant_id === undefined && activity_id === undefined) {
      return `/destinations/${destination_id}/trips/${trip_id}/hotels/${hotel_id}/details`;
    } else if (trip_id === undefined && hotel_id !== undefined && restaurant_id === undefined && activity_id === undefined) {
      return `/destinations/${destination_id}/hotels/${hotel_id}/details`;
    }
  };

  const backArrowText = () => {
    if (activity_id) {
      return "Return to Activity"
    } else if (restaurant_id) {
      return "Return to Restaurant"
    } else if (hotel_id) {
      return "Return to Hotel"
    }
  }
  return (
    <div className="back-link-btn">
      <Link className="link" to={getDetailsUrl()}>
        <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
        <p>{backArrowText()}</p>
      </Link>
    </div>
  );
}

export default ReturnToDetails;
