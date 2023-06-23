import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantsContainer() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch('/destinations/161/restaurants')
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
            setRestaurants(data);
        }
      });


    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="cards">
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;