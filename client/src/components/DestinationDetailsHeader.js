import React from "react";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search";

function DestinationDetailsHeader({ destination, trip_id, search, setSearch }) {

    const { photo, city, id } = destination;

    const getUrlFormat = (component) => {
        if (trip_id !== undefined) {
            return `/destinations/${id}/trips/${trip_id}/${component}`;
        } else {
            return `/destinations/${id}/${component}`;
        }
    };

    const getTripButton = () => {
        if (trip_id === undefined) {
            return (
                <Link className="page-btn main-btn trip-btn" to={`/destinations/${id}/trips`}>
                    Add a Trip
                </Link>
            )
        } else {
            return null
        }
    }

    return (
        <div className="header-img" style={{ backgroundImage: `url(${photo})` }}>
            <div className="header-copy">
                <h1 className="title">Welcome to {city}</h1>
                {getTripButton()}
                <div className="results">
                    <div className="nav">
                        <NavLink className="link" to={getUrlFormat("hotels")}>
                            Hotels
                        </NavLink>
                        <NavLink className="link" to={getUrlFormat("restaurants")}>
                            Restaurants
                        </NavLink>
                        <NavLink className="link" to={getUrlFormat("activities")}>
                            Activities
                        </NavLink>
                    </div>
                    <Search search={search} setSearch={setSearch} />
                </div>
            </div>
        </div>
    );
}

export default DestinationDetailsHeader;
