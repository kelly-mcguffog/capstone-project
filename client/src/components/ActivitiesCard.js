import React from "react";
import { Link } from "react-router-dom";

function ActivitiesCard({ activity, trip_id }) {

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
            <div className="details-img-wrapper">
                <div className="details-img-container">
                    <img alt={name} className="details-img" src={photo}></img>
                </div>
            </div>
            <div className="details-info-destinations">
                <div className="details-copy">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h5>{price}</h5>
                    <div className="btn-container">
                        <Link className="page-btn main-btn secondary-btn" to={getDetailsUrl()}>
                            View Details
                        </Link>
                        <Link className="page-btn main-btn" to={getItineraryUrl()}>
                            Add to Itinerary
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActivitiesCard;