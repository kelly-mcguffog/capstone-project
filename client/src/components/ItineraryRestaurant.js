import React from "react";
import ItineraryItem from "./ItineraryItem";

function ItineraryRestaurant({ trip_id, restaurant }) {
  return <ItineraryItem type="restaurant" trip_id={trip_id} item={restaurant} />;
}

export default ItineraryRestaurant;