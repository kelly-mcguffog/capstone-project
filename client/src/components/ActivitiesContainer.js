import React, { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { useParams } from "react-router-dom";
import ActivitiesCard from "./ActivitiesCard";
import DestinationDetailsHeader from "./DestinationDetailsHeader";
import FilterActivities from "./FilterActivities";

function ActivitiesContainer({ search, setSearch, handleSearch }) {
  const { destination_id, id } = useParams();
  const { destinations } = useContext(DestinationsContext);
  const [filterRating, setFilterRating] = useState("");

  if (destinations === null) {
    return <div>Loading...</div>;
  }


  const destination = destinations.find(
    (destination) => destination.id === parseInt(destination_id)
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { activities } = destination

  let filterActivities = activities.filter(activity => {
    const nameMatch = activity.name.toLowerCase().includes(search.toLowerCase());
    const ratingMatch = filterRating ? activity.rating.toString() === filterRating : true;

    return nameMatch && ratingMatch;
  });

  return (
    <>
      <DestinationDetailsHeader destination={destination} trip_id={id} search={search} setSearch={setSearch} />
      <div className="details-row">
        <FilterActivities setFilterRating={setFilterRating} />
        <div className="cards">
          {filterActivities.map(activity => <ActivitiesCard key={activity.id} trip_id={id} handleSearch={handleSearch} activity={activity} />)}
        </div>
      </div>
    </>
  );
}

export default ActivitiesContainer;