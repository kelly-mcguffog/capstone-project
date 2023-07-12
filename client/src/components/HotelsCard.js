import React from "react";
import { Link } from "react-router-dom";

function HotelsCard({ hotel, trip_id }) {

    const {id, name, photo1, rating, average_price, short_description, destination_id } = hotel
    return (
        <div className="details" key={id}>
            <div className="details-img-wrapper">
                <div className="details-img-container">
                    <img className="details-img" alt={name} src={photo1}></img>
                </div>
            </div>
            <div className="details-info-destinations">
                <div className="info-details">
                    <h5 className="star">{"★ ".repeat(rating)}</h5>
                    <h5 className="price">{"$".repeat(average_price)}</h5>
                </div>
                <div className="details-copy">
                    <h2>{name}</h2>
                    <p>{short_description}</p>
                    <div className="btn-container">
                    <Link className="page-btn main-btn secondary-btn" to={`/destinations/${destination_id}/trips/${trip_id}/hotels/${id}/details`}>View Details</Link>
                    <Link className="page-btn main-btn" to={`/destinations/${destination_id}/trips/${trip_id}/hotels/${id}`}>Add to Itinerary</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelsCard;