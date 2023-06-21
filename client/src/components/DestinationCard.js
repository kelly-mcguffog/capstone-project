import React from "react";

function DestinationCard({destination}){

    const {city, country, photo} = destination
    return(
        <div className="card-details">
            <div className="img-container">
                <img className="img" src={photo}/>
            </div>
            <div>
                <h3>{city}, {country}</h3>
            </div>
        </div>
    )
}

export default DestinationCard;