import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AllUsersContext } from "../context/AllUsersContext";
import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";
import GridHeader from "./GridHeader";
import UsersCheckIn from "./UsersCheckIn";

function RestaurantDetails() {

    const [restaurants, setRestaurants] = useState([])
    const { destination_id, trip_id, id } = useParams()
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    useEffect(() => {
        fetch(`/restaurants`)
            .then(res => res.json())
            .then(data => setRestaurants(data))
    }, [])

    const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(id))
    const { users } = useContext(AllUsersContext);

    if (!restaurant) return <div className="loading">Loading...</div>;

    if (!isLoaded) return <div className="loading">Loading...</div>;

    if (!users) return <div className="loading">Loading...</div>;

    const { name, average_price, rating, description, address, longitude, latitude, phone_number, url, photo1, photo2, photo3 } = restaurant

    const allUsers = users.flatMap((user) =>
        user.trips.flatMap((trip) =>
            trip.itinerary_days.flatMap((day) =>
                day.combined_itinerary_times
                    .filter((time) => time.restaurant && time.restaurant.id && time.restaurant.id.toString() === id)
                    .map(() => user)
            )
        )
    );

    const getItineraryUrl = () => {
        if (trip_id !== undefined) {
            return `/destinations/${destination_id}/trips/${trip_id}/restaurants/${id}`;
        } else {
            return `/destinations/${destination_id}/restaurants/${id}`;
        }
    };

    const getListingsUrl = () => {
        if (trip_id !== undefined) {
            return `/destinations/${destination_id}/trips/${trip_id}/restaurants`;
        } else {
            return `/destinations/${destination_id}/restaurants`;
        }
    }

    return (
        <>
            <GridHeader photo1={photo1} photo2={photo2} photo3={photo3} />
            <div className="background">
                <div className="back-link">
                    <div className={trip_id ? "back-link-btn" : "back-link-btn back-link-btn-details"}>
                        <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
                        <Link className="link" to={getListingsUrl()}>
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
                            <Link className="page-btn main-btn" to={getItineraryUrl()}>
                                Add to Itinerary
                            </Link>
                        </div>
                    </div>
                    <hr className="line-details"></hr>
                    <div className="map-details">
                        <Map longitude={longitude} latitude={latitude} />
                        <UsersCheckIn allUsers={allUsers} />
                        <div className="small-details">
                            <i className="fa-sharp fa-solid fa-location-dot"></i><p>{address}</p>
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

export default RestaurantDetails;