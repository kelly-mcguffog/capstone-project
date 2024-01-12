import React from "react";
import Card from "./Card";

function RestaurantsCard({ restaurant, trip_id, handleSearch }) {
  return <Card type="restaurants" item={restaurant} trip_id={trip_id} handleSearch={handleSearch} />;
}

export default RestaurantsCard;