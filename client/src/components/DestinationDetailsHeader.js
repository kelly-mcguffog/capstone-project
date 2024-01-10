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


        <div className="page-header">
            <div className="cropped-img-container">
                <img className="cropped-img" src={photo} alt={city}></img>
            </div>


            <div className="header">
                <div className="header-text">
                    <h1 className="header-copy">Welcome to {city}</h1>
                    {!id ? <Link className="btn primary-btn" to={`/destinations/${destination_id}/trips`}>
                        Add a Trip
                    </Link> : null}
                </div>
                <div className={id ? "results" : "results destination-results"}>
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
