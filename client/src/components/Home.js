import React from "react";
import Header from "./Header";
import DestinationsContainer from "./DestinationsContainer";


function Home({search, setSearch}) {

  return (
    <div className="header">
        <Header search={search} setSearch={setSearch}/>
        <DestinationsContainer />
    </div>
  );
}

export default Home;