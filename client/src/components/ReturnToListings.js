import React from "react";
import { useParams, Link } from "react-router-dom";

function ReturnToListings({ destination_id_build, trip_id_build, id, type }) {

  const { trip_id, destination_id } = useParams();

  const getListingsUrl = () => {
    if (trip_id !== undefined && type === "activity") {
      return `/destinations/${destination_id}/trips/${trip_id}/activities`;
    } else if (trip_id === undefined && type === "activity") {
      return `/destinations/${destination_id}/activities`;
    } else if (trip_id !== undefined && type === "restaurant") {
      return `/destinations/${destination_id}/trips/${trip_id}/restaurants`;
    } else if (trip_id === undefined && type === "restaurant") {
      return `/destinations/${destination_id}/restaurants`;
    } else if (trip_id !== undefined && type === "hotel") {
      return `/destinations/${destination_id}/trips/${trip_id}/hotels`;
    } else if (trip_id === undefined && type === "hotel") {
      return `/destinations/${destination_id}/hotels`;
    } else {
      return `/destinations/${destination_id_build}/trips/${trip_id_build}/hotels`;
    }
  };

  const backArrowText = () => {
    if (type === "activity") {
      return "Return to Activities";
    } else if (type === "restaurant") {
      return "Return to Restaurants";
    } else if (type === "hotel") {
      return "Return to Hotels";
    } else {
      return "Build Itinerary";
    }
  };

  return (
    <div className="back-link-btn">
      <Link className="link" to={getListingsUrl()}>
        {(id === undefined) ? <i className="fa-solid fa-circle-plus"></i> :
          <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>}
        <p>{backArrowText()}</p>
      </Link>
    </div>
  );
}

export default ReturnToListings;
