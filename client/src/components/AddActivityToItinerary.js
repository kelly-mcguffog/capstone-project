import React from "react";
import AddToItineraryForm from "./AddToItineraryForm";

function AddActivityToItinerary({ onAddItinerary }) {
  return <AddToItineraryForm formType="activity" onAddItinerary={onAddItinerary} />;
}

export default AddActivityToItinerary;
