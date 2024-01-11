import React, { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { useParams } from "react-router-dom";
import ActivitiesCard from "./ActivitiesCard";
import DestinationDetailsHeader from "./DestinationDetailsHeader";
import LoadingScreen from "./LoadingScreen";
import ReturnToTrip from "./ReturnToTrip";
import Filter from "./Filter";

function ActivitiesContainer({ search, setSearch, handleSearch }) {
  const { destination_id, id } = useParams();
  const { destinations } = useContext(DestinationsContext);
  const [filterDuration, setFilterDuration] = useState(false);
  const [filterPrice, setFilterPrice] = useState(0);

  if (destinations === null) {
    return <LoadingScreen />
  }

  const destination = destinations.find(
    (destination) => destination.id === parseInt(destination_id)
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { activities } = destination


  const extractNumericValue = (priceString) => {
    if (typeof priceString === "string") {
      const matches = priceString.match(/\d+(\.\d+)?/g);
      if (matches) {
        return parseFloat(matches[0]);
      }
    }
    return 0;
  };

  let filterActivities = activities.filter(activity => {
    const nameMatch = activity.name.toLowerCase().includes(search.toLowerCase());
    const durationMatch =
      filterDuration === "Up to 1 hour"
        ? activity.duration.toLowerCase().includes("minutes") || activity.duration === "1 hour"
        : filterDuration === "1 to 4 hours"
          ? /\d+\s*hour/.test(activity.duration) && /\d+\s*hours/.test(activity.duration)
          : filterDuration === "4 hours to 1 day"
            ? /\d+\s*hours/.test(activity.duration) && activity.duration.includes("day")
            : filterDuration
              ? activity.duration.toLowerCase() === filterDuration.toLowerCase()
              : true;
    const activityPrice = extractNumericValue(activity.price);
    const priceMatch = filterPrice ? activityPrice > filterPrice : true;
    return nameMatch && durationMatch && priceMatch;
  });



  return (
    <>
      <DestinationDetailsHeader destination={destination} search={search} setSearch={setSearch} />
      <ReturnToTrip />
      <div className={id ? "details-row details-row-trips" : "details-row"} >
        <Filter type="activities" filterPrice={filterPrice} setFilterPrice={setFilterPrice} setFilterDuration={setFilterDuration} filterDuration={filterDuration} />
        <div className="cards">
          {filterActivities.map(activity => <ActivitiesCard key={activity.id} trip_id={id} handleSearch={handleSearch} activity={activity} />)}
        </div>
      </div>
    </>
  );
}

export default ActivitiesContainer;