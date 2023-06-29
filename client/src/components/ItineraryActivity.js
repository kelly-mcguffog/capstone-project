import React from "react";

function ItineraryActivity({activity}){
    console.log(activity)
    return(
        <div>
            <h1>{activity.name}</h1>
        </div>
    )
}

export default ItineraryActivity;