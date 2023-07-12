import React, { useState } from "react";

function DestinationsContainer({ renderDestinations, destinations }) {

  const [position, setPosition] = useState(0)

  const advancePosition = () => {
    setPosition((position + 5) % destinations.length)
  }

  const retreatPosition = () => {
    if (position > 0) {
      setPosition((position - 5) % destinations.length)
    }
  }

  return (
    <div className="row">
      <div className="arrow-button" onClick={retreatPosition}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></div>
      <div className="spotlight">
        {renderDestinations.slice(position, position + 5)}
      </div>
      <div className="arrow-button" onClick={advancePosition}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></div>
    </div>
  );
}

export default DestinationsContainer;