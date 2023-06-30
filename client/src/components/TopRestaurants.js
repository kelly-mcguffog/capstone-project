import React, { useState, useEffect } from "react";
import TopRestaurantsCard from "./TopRestaurantsCard";

function TopRestaurants() {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [isMounted, setIsMounted] = useState(true);


  useEffect(() => {
    setIsMounted(true);

    const fetchTopRestaurants = async () => {
      const response = await fetch('/top-restaurants');
      const data = await response.json();

      if (isMounted) {
        setTopRestaurants(data);
      }
    };

    fetchTopRestaurants();

    return () => {
      setIsMounted(false);
    };
  }, []);

  const renderTopRestaurants = topRestaurants.map(restaurant => <TopRestaurantsCard key={restaurant.id} restaurant={restaurant} />)



  return (
    <div className="body-copy">
    <div className="row">
      {renderTopRestaurants}
    </div>
    </div>
  );
}

export default TopRestaurants;