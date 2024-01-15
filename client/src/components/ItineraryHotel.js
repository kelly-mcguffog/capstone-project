import React from "react";
import ItineraryItem from "./ItineraryItem";

function ItineraryHotel({ trip_id, hotel }) {
  return <ItineraryItem type="hotel" trip_id={trip_id} item={hotel} />;
}

export default ItineraryHotel;