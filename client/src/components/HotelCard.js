import React from "react";

function HotelCard({hotel}){

    const {name, photo} = hotel
    return(
        <div className="card-details">
            <div className="img-container">
                <img className="img" src={photo}/>
            </div>
            <div>
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default HotelCard;