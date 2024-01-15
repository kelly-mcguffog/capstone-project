import React, { useState } from "react";
import { Link } from "react-router-dom";

function ItineraryDetailsInfo({ formattedTime, itinerary_day_id, itinerary_time_id, trip_id, entityType, deleteCallback }) {
  const [isShowing, setIsShowing] = useState(false);

  const handleDropdown = () => {
    setIsShowing(isShowing => !isShowing);
  };

  return (
    <div className="itinerary-details-info details-info">
      <div className="info-details">
        <h3>{formattedTime}</h3>
        <div className="dropdown">
          <i onClick={handleDropdown} className="fa-solid fa-bars"></i>
          <div className={isShowing ? "dropdown-content visible" : "dropdown-content hidden"}>
            <Link to={`/trips/${trip_id}/itinerary_days/${itinerary_day_id}/itinerary_times/${itinerary_time_id}/edit`}>
              <h3 className="nav-link">Edit</h3>
            </Link>
            <hr></hr>
            <button onClick={deleteCallback} className="nav-link">
              <h3 className="nav-link navlink-button">Delete</h3>
            </button>
          </div>
        </div>
      </div>
      {entityType}
    </div>
  );
}

export default ItineraryDetailsInfo;