import React, { useContext} from "react";
import { useParams } from "react-router-dom";
import { DestinationsContext } from "../context/DestinationsContext";
import ActivityCard from "./ActivityCard";
import PageHeader from "./PageHeader";

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

      const activities = destination.activities

  return (
    <>
    <div
        className="header"
        style={{ backgroundImage: `url(${destination.photo})` }}
      >
        <PageHeader destination={destination} />
      </div>
    <div className="destination-cards">
      {activities.map(activity => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
    </>
  );
}

export default ActivitiesContainer;