import React from "react";
import { Link } from "react-router-dom";

function HotelsCard({ hotel, trip_id, handleSearch }) {

    const { id, name, photo1, rating, average_price, short_description, destination_id } = hotel

    const getDetailsUrl = () => {
        if (trip_id !== undefined) {
            return `/destinations/${destination_id}/trips/${trip_id}/hotels/${id}/details`;
        } else {
            return `/destinations/${destination_id}/hotels/${id}/details`;
        }
    };

    const getItineraryUrl = () => {
        if (trip_id !== undefined) {
            return `/destinations/${destination_id}/trips/${trip_id}/hotels/${id}`;
        } else {
            return `/destinations/${destination_id}/hotels/${id}`;
        }
    };

    return (
        <div className="details" key={id}>
            <div className="details-img-container">
                <img alt={name} className="cropped-img" src={photo1}></img>
            </div>
            <div className="details-info">
                <div className="info-details">
                    <h5>{"★ ".repeat(rating)}</h5>
                    <h5>{"$".repeat(average_price)}</h5>
                </div>
                <div className="details-copy">
                    <h3>{name}</h3>
                    <p>{short_description}</p>
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

export default HotelsCard;