import React from "react";
import { useParams, Link } from "react-router-dom";

function ReturnToListings({ destination_id_build, trip_id_build, activity_id, hotel_id, restaurant_id }) {
  const { trip_id, destination_id } = useParams();

  const getListingsUrl = () => {
    if (trip_id !== undefined && activity_id !== undefined && hotel_id === undefined && restaurant_id === undefined) {
      return `/destinations/${destination_id}/trips/${trip_id}/activities`;
    } else if (trip_id === undefined && activity_id !== undefined && hotel_id === undefined && restaurant_id === undefined) {
      return `/destinations/${destination_id}/activities`;
    } else if (trip_id !== undefined && restaurant_id !== undefined && hotel_id === undefined && activity_id === undefined) {
      return `/destinations/${destination_id}/trips/${trip_id}/restaurants`;
    } else if (trip_id === undefined && restaurant_id !== undefined && hotel_id === undefined && activity_id === undefined) {
      return `/destinations/${destination_id}/restaurants`;
    } else if (trip_id !== undefined && hotel_id !== undefined && restaurant_id === undefined && activity_id === undefined) {
      return `/destinations/${destination_id}/trips/${trip_id}/hotels`;
    } else if (trip_id === undefined && hotel_id !== undefined && restaurant_id === undefined && activity_id === undefined) {
      return `/destinations/${destination_id}/hotels`;
    } else if (destination_id_build !== undefined && trip_id_build !== undefined && hotel_id === undefined && restaurant_id === undefined && activity_id === undefined) {
      return `/destinations/${destination_id_build}/trips/${trip_id_build}/hotels`;
    }
  };

  const backArrowText = () => {
    if (activity_id) {
      return "Return to Activities";
    } else if (restaurant_id) {
      return "Return to Restaurants";
    } else if (hotel_id) {
      return "Return to Hotels";
    } else {
      return "Build Itinerary";
    }
  };

  return (
    <div className="back-link-btn">
      <Link className="link" to={getListingsUrl()}>
        {(hotel_id === undefined && restaurant_id === undefined && activity_id === undefined) ? <i className="fa-solid fa-circle-plus"></i> :
          <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>}
        <p>{backArrowText()}</p>
      </Link>
    </div>
  );
}

export default ReturnToListings;
