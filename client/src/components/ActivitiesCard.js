import React from "react";
import { Link } from "react-router-dom";

function ActivitiesCard({ activity, trip_id, handleSearch }) {

    const { id, photo, name, description, price, destination_id } = activity


    const getDetailsUrl = () => {
        if (trip_id !== undefined) {
            return `/destinations/${destination_id}/trips/${trip_id}/activities/${id}/details`;
        } else {
            return `/destinations/${destination_id}/activities/${id}/details`;
        }
    };


    const getItineraryUrl = () => {
        if (trip_id !== undefined) {
            return `/destinations/${destination_id}/trips/${trip_id}/activities/${id}`;
        } else {
            return `/destinations/${destination_id}/activities/${id}`;
        }
    };

    return (
        <div className="details" key={id}>
            <div className="details-img-container">
                <img alt={name} className="cropped-img" src={photo}></img>
            </div>
            <div className="details-info">
                <div className="details-copy">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h5>{price}</h5>
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

export default ActivitiesCard;