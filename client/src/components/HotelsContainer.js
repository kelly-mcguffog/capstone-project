import React, { useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { useParams, Link } from "react-router-dom";
import HotelsCard from "./HotelsCard";
import DestinationDetails from "./DestinationDetails";
import FilterHotels from "./FilterHotels";

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

      const {hotels, country, language, currency, time_zone, dial_code} = destination

  return (
    <>
    <DestinationDetails/>
    <div className="details-row">
        <FilterHotels />
        <div className="cards">
        {hotels.map(hotel => <HotelsCard key={hotel.id} hotel={hotel}/>)}
        </div>
    </div>
    </>
  );
}

export default HotelsContainer;