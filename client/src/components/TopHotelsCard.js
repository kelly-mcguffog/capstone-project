import React from "react";

function TopHotelsCard({hotel}){

    const {name, photo, rating, average_price, destination} = hotel

    return(
        <div className="rectangle-card-details">
            <div className="rectangle-img-container">
                <img className="img" src={photo}/>
            </div>
            <div className="rectangle-card-info">
                <h3>{name}</h3>
                <h5><i className="fa-solid fa-location-dot"></i> {destination.city}, {destination.country}</h5>
                <div className="info-details">
                    <h5 className="star">{"★ ".repeat(rating)}</h5>
                    <h5 className="price">{"$".repeat(average_price)}</h5>
                </div>
            </div>
        </div>
    )
}

export default TopHotelsCard;