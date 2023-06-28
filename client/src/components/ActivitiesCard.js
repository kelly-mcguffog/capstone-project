import React from "react";

function ActivitiesCard({activity}) {

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
              <button className="page-btn main-btn">Book Now</button>
          </div>
          </div>
      </div>
  );
}

export default ActivitiesCard;