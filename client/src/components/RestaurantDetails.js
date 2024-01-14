import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import LoadingScreen from "./LoadingScreen";

function RestaurantDetails() {
  const [restaurants, setRestaurants] = useState([]);
  const { id } = useParams()
  
    useEffect(() => {
        fetch(`/restaurants`)
            .then(res => res.json())
            .then(data => setRestaurants(data))
    }, [])

    const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(id))

    if (!restaurant) return <LoadingScreen />

  return <Details type="restaurant" details={restaurant} />;
}

export default RestaurantDetails;