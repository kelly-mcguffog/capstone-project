import React from "react";
import { Link } from "react-router-dom";

function ItineraryItem({ type, trip_id, item }) {
  const { id, address, description, name, destination_id, short_description, cuisine } = item;

  const getTypeSpecificDetails = () => {
    switch (type) {
      case "activity":
        return <p>{description}</p>;
      case "hotel":
        return <p>{short_description}</p>;
      case "restaurant":
        return (
          <>
            <h5>{cuisine}</h5>
            <p>{description}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="itinerary-details">
        <h3>{name}</h3>
        <h5>{address}</h5>
        {getTypeSpecificDetails()}
      </div>
      <div>
        <Link
          className="btn secondary-btn"
          to={`/destinations/${destination_id}/trips/${trip_id}/${type}s/${id}/details`}
        >
          View Details
        </Link>
      </div>
    </>
  );
}

export default ItineraryItem;