import React, { useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import DestinationCard from "./DestinationCard";
import Header from "./Header";
// import { connect } from 'react-redux';


function DestinationsContainer({search, setSearch}) {
    const {destinations} = useContext(DestinationsContext)

    if (destinations === null) {
        return <div>Loading...</div>;
      }

  return (
    <div className="header">
        <Header search={search} setSearch={setSearch}/>
    <div className="destination-cards">
      {destinations.map(destination => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
    </div>
  );
}

export default DestinationsContainer;