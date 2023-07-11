import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { DestinationsContext } from "../context/DestinationsContext";
import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";

function HotelDetails({ hotels }) {

    const { destinations } = useContext(DestinationsContext);
    const { destination_id, trip_id, id } = useParams()
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    })

    const hotel = hotels.find(hotel => hotel.id === parseInt(id))

    if (!hotel) return <div>Loading...</div>

    if(!isLoaded) return <div>Loading...</div>
    
    return (
        <>
            <div className="header-img" style={{ backgroundImage: `url(${hotel.photo})` }}>
            </div>
            <div className="background">
            <div className="back-link">
                <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
                <Link className="link" to={`/destinations/${destination_id}/trips/${trip_id}/hotels`}>Return to Listings</Link>
            </div>
            <div className="details-wrapper">
                <div className="details-container">
                    <div className="info-details">
                        <h1 className="details-name">{hotel.name}</h1>
                        <h5 className="price details-price">{"$".repeat(hotel.average_price)}</h5>
                    </div>
                    <div>
                        <h5 className="star">{"★ ".repeat(hotel.rating)}</h5>
                        <p>{hotel.description}</p>
                    </div>
                </div>
                <hr className="line-details"></hr>
                <div className="map-details">
                    <Map longitude={hotel.longitude} latitude={hotel.latitude}/>
                    <p>{hotel.address}</p>
                </div>
            </div>
            </div>
        </>
    );
}

export default HotelDetails;