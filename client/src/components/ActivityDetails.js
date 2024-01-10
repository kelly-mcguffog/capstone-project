import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";
import ReturnToListings from "./ReturnToListings";
import ReturnToTrip from "./ReturnToTrip";

function ActivityDetails() {

    const [activities, setActivities] = useState([])
    const { destination_id, trip_id, id } = useParams()
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    useEffect(() => {
        fetch(`/activities`)
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const activity = activities.find(activity => activity.id === parseInt(id))

    if (!activity || !isLoaded) return <LoadingScreen />


    const { photo, name, rating, description, price, longitude, latitude, address, duration, url } = activity

    const getItineraryUrl = () => {
        if (trip_id !== undefined) {
            return `/destinations/${destination_id}/trips/${trip_id}/activities/${id}`;
        } else {
            return `/destinations/${destination_id}/activities/${id}`;
        }
    };

    return (
        <>
            <div className="cropped-img-container">
                <img className="cropped-img" src={photo} alt={name}></img>
            </div>
            <div className="background">
                <div className="details-back-link">
                    <ReturnToListings activity_id={id} />
                    <ReturnToTrip />
                </div>
                <div className="details-wrapper">
                    <div className="details-container">
                        <div className="details-info">
                            <div className="details-copy">
                                <h2>{name}</h2>
                                <h5>{"★ ".repeat(rating)}</h5>

                                <p>{description}</p>
                                <h5>{price}</h5>
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
                                <div className="small-details">
                                    <i className="fa-solid fa-clock"></i>
                                    <p>{duration}</p>
                                </div>
                                <div className="small-details">
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                    <a className="link" href={`${url}`} rel="noreferrer" target="_blank"><p>Visit Website</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ActivityDetails;