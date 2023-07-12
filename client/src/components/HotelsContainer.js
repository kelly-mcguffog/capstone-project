import React, { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { useParams } from "react-router-dom";
import HotelsCard from "./HotelsCard";
import DestinationDetailsHeader from "./DestinationDetailsHeader";
import FilterHotels from "./FilterHotels";

function HotelsContainer({ search, setSearch }) {
  const { destination_id, id } = useParams();
  const { destinations } = useContext(DestinationsContext);
  const [filterRating, setFilterRating] = useState("");
  const [filterPrice, setFilterPrice] = useState("")

  if (destinations === null) {
    return <div>Loading...</div>;
  }


  const destination = destinations.find(
    (destination) => destination.id === parseInt(destination_id)
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { hotels } = destination

  let filterHotels = hotels.filter(hotel => {
    const nameMatch = hotel.name.toLowerCase().includes(search.toLowerCase());
    const priceMatch = filterPrice ? hotel.average_price === filterPrice : true;
    const ratingMatch = filterRating ? hotel.rating.toString() === filterRating : true;

    return nameMatch && priceMatch && ratingMatch;
  });


  return (
    <>
      <DestinationDetailsHeader destination={destination} trip_id={id} search={search} setSearch={setSearch} />
      <div className="details-row">
        <FilterHotels setFilterRating={setFilterRating} filterPrice={filterPrice} setFilterPrice={setFilterPrice} />
        <div className="cards">
          {filterHotels.map(hotel => <HotelsCard key={hotel.id} trip_id={id} hotel={hotel} />)}
        </div>
      </div>
    </>
  );
}

export default HotelsContainer;