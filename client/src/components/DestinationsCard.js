import React from "react";
import { Link } from "react-router-dom";

function DestinationsCard({destination}){

    const {id, city, photo} = destination
    return(
        <div className="card-details">
            <Link className="link" to={`/destinations/${id}/trips`}>
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

export default DestinationsCard;