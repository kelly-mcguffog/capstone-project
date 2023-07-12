import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { useParams } from "react-router-dom";
import RestaurantsCard from "./RestaurantsCard";
import DestinationDetailsHeader from "./DestinationDetailsHeader";
import FilterRestaurants from "./FilterRestaurants";

function RestaurantsContainer({ search, setSearch }) {

  const { destination_id, id } = useParams();
  const { destinations } = useContext(DestinationsContext);
  const [filterCuisine, setFilterCuisine] = useState("");
  const [filterRating, setFilterRating] = useState("");
  const [filterPrice, setFilterPrice] = useState("")


  if (destinations === null) {
    return <div>Loading...</div>;
  }


  const destination = destinations.find(
    (destination) => destination.id === parseInt(destination_id)
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { restaurants } = destination

  let filterRestaurants = restaurants.filter(restaurant => {
    const nameMatch = restaurant.name.toLowerCase().includes(search.toLowerCase());
    const priceMatch = filterPrice ? restaurant.average_price === filterPrice : true;
    const ratingMatch = filterRating ? restaurant.rating.toString() === filterRating : true;
    const cuisineMatch = filterCuisine ? restaurant.cuisine.toString() === filterCuisine : true;

    return nameMatch && priceMatch && ratingMatch && cuisineMatch;
  });

  return (
    <>
      <DestinationDetailsHeader destination={destination} trip_id={id} search={search} setSearch={setSearch} />
      <div className="details-row">
        <FilterRestaurants setFilterCuisine={setFilterCuisine} setFilterRating={setFilterRating} filterPrice={filterPrice} setFilterPrice={setFilterPrice} />
        <div className="cards">
          {filterRestaurants.map(restaurant => <RestaurantsCard key={restaurant.id} trip_id={id} restaurant={restaurant} />)}
        </div>
      </div>
    </>
  );
}

export default RestaurantsContainer;