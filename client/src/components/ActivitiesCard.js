import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ActivitiesCard({activity, trip_id}) {

  return (
      <div className="details" key={activity.id}>
          <div className="details-img-wrapper">
          <div className="details-img-container">
              <img className="details-img" src={activity.photo}></img>
          </div>
          </div>
          <div className="details-info">
          <div className="details-copy">
              <h2>{activity.name}</h2>
              <p>{activity.description}</p>
              <h5>{activity.price}</h5>
              {/* <button className="page-btn main-btn">Book Now</button> */}
              <Link className="page-btn main-btn" to={`/destinations/${activity.destination_id}/trips/${trip_id}/activities/${activity.id}`}>Add to Itinerary</Link>
          </div>
          </div>
      </div>
  );
}

export default ActivitiesCard;