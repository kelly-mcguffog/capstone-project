import React from "react";
import ItineraryItem from "./ItineraryItem";

function ItineraryActivity({ trip_id, activity }) {
  return <ItineraryItem type="activity" trip_id={trip_id} item={activity} />;
}

export default ItineraryActivity;