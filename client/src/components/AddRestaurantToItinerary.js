import React from "react";
import AddToItineraryForm from "./AddToItineraryForm";

function AddRestaurantToItinerary({ onAddItinerary }) {
  return <AddToItineraryForm formType="restaurant" onAddItinerary={onAddItinerary} />;
}

export default AddRestaurantToItinerary;