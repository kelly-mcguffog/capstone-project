import React, { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { Link, useParams } from "react-router-dom";
import HotelsCard from "./HotelsCard";
import DestinationDetailsHeader from "./DestinationDetailsHeader";
import FilterHotels from "./FilterHotels";
import { UserContext } from "../context/UserContext";

function HotelsContainer({ search, setSearch, handleSearch }) {

  const { destination_id, id } = useParams();
  const { destinations } = useContext(DestinationsContext);
  const { user } = useContext(UserContext);
  const [filterRating, setFilterRating] = useState(false);
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
      <DestinationDetailsHeader destination={destination} search={search} setSearch={setSearch} />
      {id ?
        <div className="back-link-btn back-link-btn-trip">
          <Link className="link" to={`/users/${user.id}/trips/${id}`}>
            <p className="text">
              Return to Trip
            </p>
          </Link>
          <i className="fa-sharp fa-solid fa-circle-chevron-right nav-arrow"></i>
        </div>
        : null}
      <div className={id ? "details-row details-row-trips" : "details-row"} >
        <FilterHotels setFilterRating={setFilterRating} filterRating={filterRating} filterPrice={filterPrice} setFilterPrice={setFilterPrice} />
        <div className="cards">
          {filterHotels.map(hotel => <HotelsCard key={hotel.id} trip_id={id} hotel={hotel} handleSearch={handleSearch} />)}
        </div>
      </div >
    </>
  );
}

export default HotelsContainer;