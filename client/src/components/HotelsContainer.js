import React, { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { useParams, Link } from "react-router-dom";
import HotelsCard from "./HotelsCard";
import DestinationDetails from "./DestinationDetails";
import FilterHotels from "./FilterHotels";

function HotelsContainer() {
    const { id } = useParams();
    const { destinations } = useContext(DestinationsContext);
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

      const {hotels} = destination

    let filterHotels = hotels.filter(hotel => {
        const nameMatch = hotel.name.toLowerCase().includes(search.toLowerCase());
        const priceMatch = filterPrice ? hotel.average_price === filterPrice : true;
        const ratingMatch = filterRating ? hotel.rating.toString() === filterRating : true;

        return nameMatch && priceMatch && ratingMatch;
      });

  return (
    <>
    <DestinationDetails search={search} setSearch={setSearch} />
    <div className="details-row">
        <FilterHotels setFilterRating={setFilterRating} filterPrice={filterPrice} setFilterPrice={setFilterPrice}/>
        <div className="cards">
        {filterHotels.map(hotel => <HotelsCard key={hotel.id} hotel={hotel}/>)}
        </div>
    </div>
    </>
  );
}

export default HotelsContainer;