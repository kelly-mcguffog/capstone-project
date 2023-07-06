import React from "react";
import { Link } from "react-router-dom";

function RestaurantsCard({restaurant, trip_id}) {

  return (

    <div className="details" key={restaurant.id}>
            <div className="details-img-wrapper">
            <div className="details-img-container">
                <img className="details-img" src={restaurant.photo}></img>
            </div>
            </div>
            <div className="details-info">
            <div className="info-details">
                    <h5 className="star">{"★ ".repeat(restaurant.rating)}</h5>
                    <h5 className="price">{"$".repeat(restaurant.average_price)}</h5>
                </div>
            <div className="details-copy">
                <h2>{restaurant.name}</h2>
                <p>{restaurant.description}</p>
                {/* <button className="page-btn main-btn">Book Now</button> */}
                <Link className="page-btn main-btn" to={`/destinations/${restaurant.destination_id}/trips/${trip_id}/restaurants/${restaurant.id}`}>Add to Itinerary</Link>
            </div>
            </div>
        </div>
  );
}

export default RestaurantsCard;