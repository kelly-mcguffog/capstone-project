import React from "react";
import { Link } from "react-router-dom";

function Card({ type, item, trip_id, handleSearch }) {
  const {
    id,
    name,
    photo1,
    photo,
    rating,
    average_price,
    short_description,
    description,
    price,
    destination_id,
  } = item;

  const getDetailsUrl = () => {
    if (trip_id !== undefined) {
      return `/destinations/${destination_id}/trips/${trip_id}/${type}/${id}/details`;
    } else {
      return `/destinations/${destination_id}/${type}/${id}/details`;
    }
  };

  const getItineraryUrl = () => {
    if (trip_id !== undefined) {
      return `/destinations/${destination_id}/trips/${trip_id}/${type}/${id}`;
    } else {
      return `/destinations/${destination_id}/${type}/${id}`;
    }
  };

  return (
    <div className="details" key={id}>
      <div className="details-img-container">
        <img alt={name} className="cropped-img" src={type === "activities" ? photo : photo1}></img>
      </div>
      <div className="details-info">
        <div className="info-details">
          {type !== "activities" && <h5>{"★ ".repeat(rating)}</h5>}
          {type !== "activities" && <h5>{"$".repeat(average_price)}</h5>}
        </div>
        <div className="details-copy">
          <h3>{name}</h3>
          <p>{type === "hotels" ? short_description : description}</p>
          {type === "activities" && <h5>{price}</h5>}
        </div>
        <div className="btn-container">
          <Link onClick={handleSearch} className="btn secondary-btn" to={getDetailsUrl()}>
            View Details
          </Link>
          <Link onClick={handleSearch} className="btn primary-btn" to={getItineraryUrl()}>
            Add to Itinerary
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
