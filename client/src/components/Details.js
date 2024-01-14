import React from "react";
import { Link, useParams } from "react-router-dom";
import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";
import GridHeader from "./GridHeader";
import LoadingScreen from "./LoadingScreen";
import ReturnToListings from "./ReturnToListings";
import ReturnToTrip from "./ReturnToTrip";

function Details({ type, details }) {
  const { destination_id, trip_id, id } = useParams();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

if (!details || !isLoaded) return <LoadingScreen />

  const {
    name,
    average_price,
    rating,
    description,
    address,
    longitude,
    latitude,
    phone_number,
    url,
    photo,
    photo1,
    photo2,
    photo3,
  } = details;

  const getItineraryUrl = () => {
    if (trip_id !== undefined) {
      return `/destinations/${destination_id}/trips/${trip_id}/${type}s/${id}`;
    } else {
      return `/destinations/${destination_id}/${type}s/${id}`;
    }
  };

  return (
    <>
    {type !== "activity" ? 
      <GridHeader photo1={photo1} photo2={photo2} photo3={photo3} />
      : <div className="cropped-img-container">
                      <img className="cropped-img" src={photo} alt={name}></img>
                 </div>
    }
      <div className="background">
        <div className="details-back-link">
          <ReturnToListings type={type} id={id} />
          <ReturnToTrip />
        </div>
        <div className="details-wrapper">
          <div className="details-container">
            <div className="details-info">
              <div className="details-copy">
                <div className="info-details">
                  <h2>{name}</h2>
                  {type !== "activity" && <h5>{"$".repeat(average_price)}</h5>}
                </div>
                {type !== "activity" && <h5>{"★ ".repeat(rating)}</h5>}
                <p>{description}</p>
              </div>
              <Link className="btn primary-btn" to={getItineraryUrl()}>
                Add to Itinerary
              </Link>
            </div>
            <hr className="line-details"></hr>
            <div className="map-details">
              <Map longitude={longitude} latitude={latitude} />
              <div className="map-info">
                <div className="small-details">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  <p>{address}</p>
                </div>
                {type === "hotel" && (
                  <div className="small-details">
                    <i className="fa-solid fa-phone"></i>
                    <p>+{phone_number}</p>
                  </div>
                )}
                <div className="small-details">
                  <i className="fa-solid fa-up-right-from-square"></i>
                  <a className="link" href={`${url}`} rel="noreferrer" target="_blank">
                    <p>Visit Website</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;