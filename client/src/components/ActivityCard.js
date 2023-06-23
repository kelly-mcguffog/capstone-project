import React from "react";

function ActivityCard({activity}){

    const {name, photo} = activity

    console.log(activity)
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

export default ActivityCard;