import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { DestinationsContext } from "../context/DestinationsContext";
import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";
import GridHeader from "./GridHeader";

function RestaurantDetails({ restaurants }) {

    const { destinations } = useContext(DestinationsContext);
    const { destination_id, trip_id, id } = useParams()
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(id))

    if (!restaurant) return <div>Loading...</div>

    if(!isLoaded) return <div>Loading...</div>

    const {name, average_price, rating, description, address, longitude, latitude, phone_number, url, photo1, photo2, photo3} = restaurant

    
    return (
        <>
            <GridHeader photo1={photo1} photo2={photo2} photo3={photo3}/>
            <div className="background">
            <div className="back-link">
                <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
                <Link className="link" to={`/destinations/${destination_id}/trips/${trip_id}/restaurants`}>Return to Listings</Link>
            </div>
            <div className="details-wrapper">
                <div className="details-container">
                    <div className="info-details">
                        <h1 className="details-name">{name}</h1>
                        <h5 className="price details-price">{"$".repeat(average_price)}</h5>
                    </div>
                    <div>
                        <h5 className="star">{"★ ".repeat(rating)}</h5>
                        <p>{description}</p>
                        <Link className="page-btn main-btn" to={`/destinations/${destination_id}/trips/${trip_id}/restaurants/${id}`}>Add to Itinerary</Link>
                    </div>
                </div>
                <hr className="line-details"></hr>
                <div className="map-details">
                    <Map longitude={longitude} latitude={latitude}/>
                    <div className="small-details">
                    <i className="fa-sharp fa-solid fa-location-dot"></i><p>{address}</p>
                    </div>
                    <div className="small-details">
                        <i className="fa-solid fa-phone"></i>
                        <p>+{phone_number}</p>
                    </div>
                    <div className="small-details">
                    <i className="fa-solid fa-up-right-from-square"></i>
                    <a className="link" href={`${url}`} target="_blank"><p>Visit Website</p></a>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default RestaurantDetails;