import React from "react";
import PageHeader from "./PageHeader";
import { useParams } from "react-router-dom";

function DestinationDetailsHeader({ destination, search, setSearch }) {
  const { photo, city } = destination;
  const { id } = useParams()

  return (
    <PageHeader
      title={`Welcome to ${city}`}
      imageSrc={photo}
      search={search}
      setSearch={setSearch}
      addTripLink={!id}
      navLinks={[
        { to: "hotels", label: "Hotels" },
        { to: "restaurants", label: "Restaurants" },
        { to: "activities", label: "Activities" },
      ]}
    />
  );
}

export default DestinationDetailsHeader;
