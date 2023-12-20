import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GridHeader from "./GridHeader";
import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";
import LoadingScreen from "./LoadingScreen";

function HotelDetails() {

    const [hotels, setHotels] = useState([])
    const { destination_id, trip_id, id } = useParams()

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    useEffect(() => {
        fetch(`/hotels`)
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])

    const hotel = hotels.find(hotel => hotel.id === parseInt(id))

    if (!hotel || !isLoaded) return <LoadingScreen/>


    const { name, average_price, rating, description, address, longitude, latitude, phone_number, url, photo1, photo2, photo3 } = hotel

    const getItineraryUrl = () => {
        if (trip_id !== undefined) {
            return `/destinations/${destination_id}/trips/${trip_id}/hotels/${id}`;
        } else {
            return `/destinations/${destination_id}/hotels/${id}`;
        }
    };

    const getListingsUrl = () => {
        if (trip_id !== undefined) {
            return `/destinations/${destination_id}/trips/${trip_id}/hotels`;
        } else {
            return `/destinations/${destination_id}/hotels`;
        }
    };

    return (
        <>
            <GridHeader photo1={photo1} photo2={photo2} photo3={photo3} />
            <div className="background">
                <div className="back-link">
                    <div className={trip_id ? "back-link-btn" : "back-link-btn back-link-btn-details"}>
                        <Link className="link" to={getListingsUrl()}>
                            <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
                            <p className="text">
                                Return to Listings
                            </p>
                        </Link>
                    </div>

                    {trip_id ?
                        <div className="back-link-btn">
                            <Link className="link" to={`/trips/${trip_id}`}>
                                <p className="text">
                                    Return to Trip
                                </p>
                            </Link>
                            <i className="fa-sharp fa-solid fa-circle-chevron-right nav-arrow"></i>
                        </div>
                        : null}
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
                            <Link className="page-btn main-btn itinerary-btn" to={getItineraryUrl()}>
                                Add to Itinerary
                            </Link>
                        </div>
                    </div>
                    <hr className="line-details"></hr>
                    <div className="map-details">
                        <Map longitude={longitude} latitude={latitude} />
                        <div className="small-details">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                            <p>{address}</p>
                        </div>
                        <div className="small-details">
                            <i className="fa-solid fa-phone"></i>
                            <p>+{phone_number}</p>
                        </div>
                        <div className="small-details">
                            <i className="fa-solid fa-up-right-from-square"></i>
                            <a className="link" href={`${url}`} rel="noreferrer" target="_blank"><p>Visit Website</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelDetails;