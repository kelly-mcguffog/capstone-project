import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HotelsCard({hotel, trip_id}) {

  return (
        <div className="details" key={hotel.id}>
            <div className="details-img-wrapper">
            <div className="details-img-container">
                <img className="details-img" src={hotel.photo}></img>
            </div>
            </div>
            <div className="details-info">
            <div className="info-details">
                    <h5 className="star">{"★ ".repeat(hotel.rating)}</h5>
                    <h5 className="price">{"$".repeat(hotel.average_price)}</h5>
                </div>
            <div className="details-copy">
                <h2>{hotel.name}</h2>
                <p>{hotel.short_description}</p>
                <button className="page-btn main-btn">Book Now</button>
                <Link to={`/destinations/${hotel.destination_id}/trips/${trip_id}/hotels/${hotel.id}`}>Add to Itinerary</Link>
            </div>
            </div>
        </div>
  );
}

export default HotelsCard;