import React, { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { useParams, Link } from "react-router-dom";
import ActivitiesCard from "./ActivitiesCard";
import DestinationDetailsHeader from "./DestinationDetailsHeader";
import FilterActivities from "./FilterActivities";

function ActivitiesContainer({ search, setSearch }) {
  const { destination_id, id } = useParams();
  const { destinations } = useContext(DestinationsContext);
  const [filterRating, setFilterRating] = useState("");
  const [filterPrice, setFilterPrice] = useState(3)

  if (destinations === null) {
    return <div>Loading...</div>;
  }


  const destination = destinations.find(
    (destination) => destination.id == destination_id
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { activities } = destination

  let filterActivities = activities.filter(activity => {
    const nameMatch = activity.name.toLowerCase().includes(search.toLowerCase());
    // const priceMatch = filterPrice ? activity.average_price === filterPrice : true;
    const ratingMatch = filterRating ? activity.rating.toString() === filterRating : true;

    return nameMatch && ratingMatch;
  });

  return (
    <>
      <DestinationDetailsHeader destination={destination} trip_id={id} search={search} setSearch={setSearch} />
      <div className="details-row">
        <FilterActivities setFilterRating={setFilterRating} />
        <div className="cards">
          {filterActivities.map(activity => <ActivitiesCard key={activity.id} trip_id={id} activity={activity} />)}
        </div>
      </div>
    </>
  );
}

export default ActivitiesContainer;