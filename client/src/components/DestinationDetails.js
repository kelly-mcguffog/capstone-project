import React, { useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import PageHeader from "./PageHeader";
import { useParams } from "react-router-dom";

function DestinationDetails() {
  const { id } = useParams();
  const { destinations } = useContext(DestinationsContext);

  console.log(id)

  if (destinations === null) {
    return <div>Loading...</div>;
  }

  const destination = destinations.find(
    (destination) => destination.id.to_i === id.to_i
  );

  console.log(destination)

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { photo, city, country, language, currency, time_zone, dial_code } =
    destination;

  return (
    <>
      <div
        className="header"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <PageHeader destination={destination} />
      </div>
      <div className="card-details">
        <div className="info">
          <i className="fa-solid fa-globe"></i>
          <h3>Country: {country}</h3>
          <h3>Language: {language}</h3>
          <h3>Currency: {currency}</h3>
        </div>
      </div>
    </>
  );
}

export default DestinationDetails;
