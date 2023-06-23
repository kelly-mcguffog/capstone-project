import React, { useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import PageHeader from "./PageHeader";
import { useParams } from "react-router-dom";
// import { useLoadScript } from '@react-google-maps/api';
// import Map from "./Map";


function DestinationDetails() {
  const { id } = useParams();
  const { destinations } = useContext(DestinationsContext);
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
//   })

//   if(!isLoaded) return <div>Loading...</div>

  if (destinations === null) {
    return <div>Loading...</div>;
  }


  const destination = destinations.find(
    (destination) => destination.id == id
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { photo, city, country, language, currency, time_zone, dial_code } = destination;



  return (
    <>
      <div
        className="header"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <PageHeader destination={destination} />
      </div>
      <div className="card-info">
        <div className="info">
          <i className="fa-solid fa-globe"></i>
          <h3>Country: {country}</h3>
          <h3>Language: {language}</h3>
          <h3>Currency: {currency}</h3>
        </div>
        <div className="info">
          <i className="fa-solid fa-cloud"></i>
          <h3>Country: {country}</h3>
          <h3>Language: {language}</h3>
          <h3>Currency: {currency}</h3>
        </div>
        <div className="info">
            <i className="fa-solid fa-clock"></i>
          <h3>Country: {country}</h3>
          <h3>Language: {language}</h3>
          <h3>Currency: {currency}</h3>
        </div>
      </div>
      {/* <Map /> */}
    </>
  );
}

export default DestinationDetails;
