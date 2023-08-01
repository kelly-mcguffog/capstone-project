import React from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import Search from "./Search";

function DestinationDetailsHeader({ destination, search, setSearch }) {

    const { photo, city } = destination;
    const { destination_id, id } = useParams()

    const getUrlFormat = (component) => {
        if (id !== undefined) {
            return `/destinations/${destination_id}/trips/${id}/${component}`;
        } else {
            return `/destinations/${destination_id}/${component}`;
        }
    };

    return (
        <div className="header-img" style={{ backgroundImage: `url(${photo})` }}>
            <div className="header-copy">
                <h1 className="title">Welcome to {city}</h1>
                {!id ? <Link className="page-btn main-btn trip-btn" to={`/destinations/${destination_id}/trips`}>
                    Add a Trip
                </Link> : null}
                <div className={id ? "results destination-results-trip" : "results destination-results"}>
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
