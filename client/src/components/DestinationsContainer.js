import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";
import Header from "./Header";

function DestinationsContainer({search, setSearch}) {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch('/destinations')
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setDestinations(data);
        }
      });


    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="header">
        <Header search={search} setSearch={setSearch}/>
    <div className="cards">
      {destinations.map(destination => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
    </div>
  );
}

export default DestinationsContainer;