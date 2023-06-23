import React, { useContext} from "react";
import { useParams } from "react-router-dom";
import { DestinationsContext } from "../context/DestinationsContext";
import HotelCard from "./HotelCard";
import PageHeader from "./PageHeader";

function HotelsContainer() {
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

      const hotels = destination.hotels

  return (
    <>
    <div
        className="header"
        style={{ backgroundImage: `url(${destination.photo})` }}
      >
        <PageHeader destination={destination} />
      </div>
    <div className="cards">
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
    </>
  );
}

export default HotelsContainer;