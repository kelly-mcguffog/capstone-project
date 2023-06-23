import React from "react";

function RestaurantCard({restaurant}){

    const {name, photo} = restaurant
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

export default RestaurantCard;