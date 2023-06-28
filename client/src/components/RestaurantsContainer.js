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
    const [filterPrice, setFilterPrice] = useState(3)
    

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


    //   const filterRestaurants = restaurants.filter(restaurant => {
    //     if (filter === "All") return true;
    //     return (
    //         restaurant.average_price <= filterPrice ||
    //         restaurant.rating.toString() === filter ||
    //         restaurant.cuisine.toString() === filter
    //     );
    // });

    const filterRestaurants = restaurants.filter(restaurant => {
        if (filterPrice && filterRating && filterCuisine) {
            return restaurant.average_price <= filterPrice && restaurant.rating.toString() === filterRating && restaurant.cuisine.toString() === filterCuisine;
          } else if (filterPrice && filterRating) {
            return restaurant.average_price <= filterPrice && restaurant.rating.toString() === filterRating;
          } else if (filterRating && filterCuisine) {
            return restaurant.rating.toString() === filterRating && restaurant.cuisine.toString() === filterCuisine;
          } else if (filterPrice && filterCuisine) {
            return restaurant.average_price <= filterPrice && restaurant.cuisine.toString() === filterCuisine;
          } else if (filterPrice) {
            return restaurant.average_price <= filterPrice;
          } else if (filterRating) {
            return restaurant.rating.toString() === filterRating;
          } else if (filterCuisine) {
            return restaurant.cuisine.toString() === filterCuisine;
          }
          
          return true;
    
    });


  return (

    <>
    <DestinationDetails/>
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