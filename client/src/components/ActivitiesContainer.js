import React, { useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { useParams, Link } from "react-router-dom";
import ActivitiesCard from "./ActivitiesCard";
import DestinationDetails from "./DestinationDetails";
import FilterActivities from "./FilterActivities";

function ActivitiesContainer() {
    const { id } = useParams();
    const { destinations } = useContext(DestinationsContext);

    if (destinations === null) {
        return <div>Loading...</div>;
      }
    
    
      const destination = destinations.find(
        (destination) => destination.id == id
      );
    
      if (!destination) {
        return <div>Destination not found</div>;
      }

      const {activities} = destination
  return (
    <>
    <DestinationDetails/>
    <div className="details-row">
        <FilterActivities />
        <div className="cards">
        {activities.map(activity => <ActivitiesCard key={activity.id} activity={activity}/>)}
        </div>
    </div>
    </>
  );
}

export default ActivitiesContainer;