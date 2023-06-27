import React from "react";
import { Link } from "react-router-dom";

function PageHeader({destination}){
    return(
        <div className="header-copy">
            <h1 className="title">Welcome to {destination.city}</h1>
            <div className="buttons">
                {/* <Link className="btn" to={`/destinations/${destination.id}/hotels`}>Hotels</Link>
                <Link className="btn" to={`/destinations/${destination.id}/restaurants`}>Restaurants</Link>
                <Link className="btn" to={`/destinations/${destination.id}/activities`}>Things to do</Link> */}
            </div>
        </div>
    )
}

export default PageHeader;