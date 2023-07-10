import React from "react";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search";

function DestinationDetailsHeader({ destination, trip_id, search, setSearch }) {

    const { photo, city, id } = destination;
    return (
        <div className="header-img" style={{ backgroundImage: `url(${photo})` }}>
            <div className="header-copy">
                <h1 className="title">Welcome to {city}</h1>
                {/* <Link to={`/destinations/${id}/trips`} className="main-btn">Plan a trip</Link> */}
                <div className="results">
                    <div className="nav">
                        <NavLink className="link" to={`/destinations/${id}/trips/${trip_id}/hotels`}>Hotels</NavLink>
                        <NavLink className="link" to={`/destinations/${id}/trips/${trip_id}/restaurants`}>Restaurants</NavLink>
                        <NavLink className="link" to={`/destinations/${id}/trips/${trip_id}/activities`}>Activities</NavLink>
                    </div>
                    <Search search={search} setSearch={setSearch} />
                </div>
            </div>
        </div>
    )
}

export default DestinationDetailsHeader;