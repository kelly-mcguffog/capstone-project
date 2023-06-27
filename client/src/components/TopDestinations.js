import React, { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard";

function TopDestinations() {
  const [topDestinations, setTopDestinations] = useState([]);
  const [isMounted, setIsMounted] = useState(true);
  const [position, setPosition] = useState(0)


  useEffect(() => {
    setIsMounted(true);

    const fetchTopDestinations = async () => {
      const response = await fetch('/top-destinations');
      const data = await response.json();

      if (isMounted) {
        setTopDestinations(data);
      }
    };

    fetchTopDestinations();

    return () => {
      setIsMounted(false);
    };
  }, []);

  const renderTopDestinations = topDestinations.map(destination => <DestinationCard key={destination.id} destination={destination} />)


  const advancePosition = () => {
    setPosition((position + 5) % topDestinations.length)
  }

  const retreatPosition = () => {
    if(position > 0){
        setPosition((position - 5) % topDestinations.length)
    }
  }
  



  return (
    <div className="body-copy">
    <div className="row">
      <div className="arrow-button" onClick={retreatPosition}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></div>
      <div className="spotlight">       
        {renderTopDestinations.slice(position, position+5)}
      </div>
      <div className="arrow-button" onClick={advancePosition}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></div>
    </div>
    </div>
  );
}

export default TopDestinations;