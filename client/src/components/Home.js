import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import DestinationsContainer from "./DestinationsContainer";
import DestinationsCard from "./DestinationsCard";
import { DestinationsContext } from "../context/DestinationsContext";
import LoadingScreen from "./LoadingScreen";

function Home({ search, setSearch }) {

  const { destinations } = useContext(DestinationsContext);
  const [searchDestinations, setSearchDestinations] = useState([]);

  useEffect(() => {
    if (search.trim() !== "") {
      const filteredDestinations = destinations.filter((destination) =>
        destination.city.toLowerCase().includes(search.toLowerCase())
      );
      setSearchDestinations(filteredDestinations);
    } else {
      setSearchDestinations("");
    }
  }, [search, destinations]);

  if (destinations === null) {
    return <LoadingScreen />
  }

  const renderDestinations = destinations.map((destination) => (
    <DestinationsCard key={destination.id} destination={destination} />
  ));

  return (
    <div className="wrapper">
      <Header search={search} setSearch={setSearch} searchDestinations={searchDestinations} />
      <DestinationsContainer
        renderDestinations={renderDestinations}
        destinations={destinations}
      />
    </div>
  );
}


export default Home;
