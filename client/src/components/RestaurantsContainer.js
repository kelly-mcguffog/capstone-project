import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { Link, useParams } from "react-router-dom";
import RestaurantsCard from "./RestaurantsCard";
import DestinationDetailsHeader from "./DestinationDetailsHeader";
import FilterRestaurants from "./FilterRestaurants";
import LoadingScreen from "./LoadingScreen";

function RestaurantsContainer({ search, setSearch, handleSearch }) {

  const { destination_id, id } = useParams();
  const { destinations } = useContext(DestinationsContext);
  const [filterCuisine, setFilterCuisine] = useState(false);
  const [filterRating, setFilterRating] = useState(false);
  const [filterPrice, setFilterPrice] = useState("")

  if (destinations === null) {
    // return <div className="loading">Loading...</div>;
    return <LoadingScreen/>
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
      <DestinationDetailsHeader destination={destination} search={search} setSearch={setSearch} />
      {id ?
        <div className="back-link-btn back-link-btn-trip">
          <Link className="link" to={`/trips/${id}`}>
            <p className="text">
              Return to Trip
            </p>
          </Link>
          <i className="fa-sharp fa-solid fa-circle-chevron-right nav-arrow"></i>
        </div>
        : null}
      <div className={id ? "details-row details-row-trips" : "details-row"} >
        <FilterRestaurants filterCuisine={filterCuisine} setFilterCuisine={setFilterCuisine} setFilterRating={setFilterRating} filterRating={filterRating} filterPrice={filterPrice} setFilterPrice={setFilterPrice} />
        <div className="cards">
          {filterRestaurants.map(restaurant => <RestaurantsCard key={restaurant.id} trip_id={id} handleSearch={handleSearch} restaurant={restaurant} />)}
        </div>
      </div>
    </>
  );
}

export default RestaurantsContainer;