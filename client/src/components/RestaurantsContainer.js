import React, { useContext} from "react";
import { useParams } from "react-router-dom";
import { DestinationsContext } from "../context/DestinationsContext";
import RestaurantCard from "./RestaurantCard";
import PageHeader from "./PageHeader";

function RestaurantsContainer() {
    const { id } = useParams();
    const { destinations } = useContext(DestinationsContext);

    if (destinations === null) {
        return <div>Loading...</div>;
      }
    
    
      const destination = destinations.find(
        (destination) => destination.id == id
      );
    
      if (!destination) {
        return <div>Destination not found</div>;
      }

      const restaurants = destination.restaurants

  return (
    <>
    <div
        className="header"
        style={{ backgroundImage: `url(${destination.photo})` }}
      >
        <PageHeader destination={destination} />
      </div>
    <div className="cards">
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
    </>
  );
}

export default RestaurantsContainer;