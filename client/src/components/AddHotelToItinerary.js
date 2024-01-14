import React from "react";
import AddToItineraryForm from "./AddToItineraryForm";

function AddHotelToItinerary({ onAddItinerary }) {
  return <AddToItineraryForm formType="hotel" onAddItinerary={onAddItinerary} />;
}

export default AddHotelToItinerary;