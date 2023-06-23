import React from "react";
import { Link } from "react-router-dom";

function PageHeader({destination}){
    return(
        <div className="header-text">
            <h1 className="title">Welcome to {destination.city}</h1>
            <div className="buttons">
                <Link className="btn" to="/destinations/161/hotels">Hotels</Link>
                <Link className="btn" to="/destinations/161/restaurants">Restaurants</Link>
                <Link className="btn" to="/destinations/161/activities">Things to do</Link>
            </div>
        </div>
    )
}

export default PageHeader;