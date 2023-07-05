import React, { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import DestinationsCard from "./DestinationsCard";


function DestinationsContainer() {
    const {destinations} = useContext(DestinationsContext)
    const [position, setPosition] = useState(0)

    if (destinations === null) {
        return <div>Loading...</div>;
      }

      const renderDestinations = destinations.map(destination => <DestinationsCard key={destination.id} destination={destination} />)


  const advancePosition = () => {
    setPosition((position + 5) % destinations.length)
  }

  const retreatPosition = () => {
    if(position > 0){
        setPosition((position - 5) % destinations.length)
    }
  }
  

  return (
    <div className="row">
      <div className="arrow-button" onClick={retreatPosition}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></div>
      <div className="spotlight">       
        {renderDestinations.slice(position, position+5)}
      </div>
      <div className="arrow-button" onClick={advancePosition}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></div>
    </div>
  );
}

export default DestinationsContainer;