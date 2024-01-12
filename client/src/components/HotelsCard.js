import React from "react";
import Card from "./Card";

function HotelsCard({ hotel, trip_id, handleSearch }) {
  return <Card type="hotels" item={hotel} trip_id={trip_id} handleSearch={handleSearch} />;
}

export default HotelsCard;
