import React from "react";
import { Link } from "react-router-dom";

function RestaurantsCard({ restaurant, trip_id }) {

    return (

        <div className="details" key={restaurant.id}>
            <div className="details-img-wrapper">
                <div className="details-img-container">
                    <img className="details-img" src={restaurant.photo1}></img>
                </div>
            </div>
            <div className="details-info-destinations">
                <div className="info-details">
                    <h5 className="star">{"★ ".repeat(restaurant.rating)}</h5>
                    <h5 className="price">{"$".repeat(restaurant.average_price)}</h5>
                </div>
                <div className="details-copy">
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant.description}</p>
                    <div className="btn-container">
                    <Link className="page-btn main-btn secondary-btn" to={`/destinations/${restaurant.destination_id}/trips/${trip_id}/restaurants/${restaurant.id}/details`}>View Details</Link>
                    <Link className="page-btn main-btn" to={`/destinations/${restaurant.destination_id}/trips/${trip_id}/restaurants/${restaurant.id}`}>Add to Itinerary</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantsCard;