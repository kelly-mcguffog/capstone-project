import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { useParams, Link } from "react-router-dom";
import RestaurantsCard from "./RestaurantsCard";
import DestinationDetails from "./DestinationDetails";
import FilterRestaurants from "./FilterRestaurants";

function RestaurantsContainer() {

    const { id } = useParams();
    const { destinations } = useContext(DestinationsContext);
    const [filterCuisine, setFilterCuisine] = useState("");
    const [filterRating, setFilterRating] = useState("");
    const [filterPrice, setFilterPrice] = useState("")
    const [search, setSearch] = useState("")
    

    if (destinations === null) {
        return <div>Loading...</div>;
      }
    
    
      const destination = destinations.find(
        (destination) => destination.id == id
      );
    
      if (!destination) {
        return <div>Destination not found</div>;
      }

      const {restaurants} = destination

        let filterRestaurants = restaurants.filter(restaurant => {
            const nameMatch = restaurant.name.toLowerCase().includes(search.toLowerCase());
            const priceMatch = filterPrice ? restaurant.average_price === filterPrice : true;
            const ratingMatch = filterRating ? restaurant.rating.toString() === filterRating : true;
            const cuisineMatch = filterCuisine ? restaurant.cuisine.toString() === filterCuisine : true;
          
            return nameMatch && priceMatch && ratingMatch && cuisineMatch;
          });

  return (

    <>
    <DestinationDetails search={search} setSearch={setSearch} />
    <div className="details-row">
        <FilterRestaurants setFilterCuisine={setFilterCuisine} setFilterRating={setFilterRating} filterPrice={filterPrice} setFilterPrice={setFilterPrice} />
        <div className="cards">
        {filterRestaurants.map(restaurant => <RestaurantsCard key={restaurant.id} restaurant={restaurant}/>)}
        </div>
    </div>
    </>
  );
}

export default RestaurantsContainer;