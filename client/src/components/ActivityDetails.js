import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import LoadingScreen from "./LoadingScreen";

function ActivityDetails() {
    const [activities, setActivities] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        fetch(`/activities`)
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const activity = activities.find(activity => activity.id === parseInt(id))

    if (!activity) return <LoadingScreen />

    return <Details type="activity" details={activity} />;
}

export default ActivityDetails;
