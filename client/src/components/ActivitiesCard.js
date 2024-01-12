import React from "react";
import Card from "./Card";

function ActivitiesCard({ activity, trip_id, handleSearch }) {
  return <Card type="activities" item={activity} trip_id={trip_id} handleSearch={handleSearch} />;
}

export default ActivitiesCard;
