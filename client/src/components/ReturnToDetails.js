import React from "react";
import { useParams, Link } from "react-router-dom";

function ReturnToDetails({ id, formType}) {
  const { trip_id, destination_id } = useParams();

  const getDetailsUrl = () => {
    if (trip_id !== undefined && formType === "activity") {
      return `/destinations/${destination_id}/trips/${trip_id}/activities/${id}/details`;
    } else if (trip_id === undefined && formType === "activity") {
      return `/destinations/${destination_id}/activities/${id}/details`;
    } else if (trip_id !== undefined && formType === "restaurant") {
      return `/destinations/${destination_id}/trips/${trip_id}/restaurants/${id}/details`;
    } else if (trip_id === undefined && formType === "restaurant") {
      return `/destinations/${destination_id}/restaurants/${id}/details`;
    } else if (trip_id !== undefined && formType === "hotel") {
      return `/destinations/${destination_id}/trips/${trip_id}/hotels/${id}/details`;
    } else if (trip_id === undefined && formType === "hotel") {
      return `/destinations/${destination_id}/hotels/${id}/details`;
    }
  };

  const backArrowText = () => {
    if (formType === "activity") {
      return "Return to Activity"
    } else if (formType === "restaurant") {
      return "Return to Restaurant"
    } else if (formType === "hotel") {
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
