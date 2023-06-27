import React from "react";
import { Link } from "react-router-dom";

function DestinationCard({destination}){

    const {id, city, country, photo} = destination
    return(
        <div className="card-details">
            <Link className="link" to={`/destinations/${id}`}>
                <div className="img-container">
                    <img className="img" src={photo}/>
                </div>
                <div>
                    <h3>{city}</h3>
                </div>
            </Link>
        </div>
    )
}

export default DestinationCard;