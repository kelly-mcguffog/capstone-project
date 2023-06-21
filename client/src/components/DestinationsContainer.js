import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";

function DestinationsContainer() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    let isMounted = true; // Flag to track if component is mounted

    fetch('/destinations')
      .then(res => res.json())
      .then(data => {
        if (isMounted) { // Check if component is still mounted
          setDestinations(data);
        }
      });

    // Cleanup function
    return () => {
      isMounted = false; // Set the flag to false when component unmounts
    };
  }, []);

  return (
    <div className="cards">
      {destinations.map(destination => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
}

export default DestinationsContainer;