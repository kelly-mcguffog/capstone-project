import React, { useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { useParams, NavLink } from "react-router-dom";
import Search from "./Search";

function DestinationDetails(){
    const { id } = useParams();
  const { destinations } = useContext(DestinationsContext);

  if (destinations === null) {
    return <div>Loading...</div>;
  }


  const destination = destinations.find(
    (destination) => destination.id == id
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { photo } = destination;
    return(
        <div className="header-img" style={{ backgroundImage: `url(${photo})` }}>
            <div className="header-copy">
                <h1 className="title">Welcome to {destination.city}</h1>
                <div className="results">
                    <div className="nav">
                        <NavLink className="link" to={`/destinations/${id}/hotels`}>Hotels</NavLink>
                        <NavLink className="link" to={`/destinations/${id}/restaurants`}>Restaurants</NavLink>
                        <NavLink className="link" to={`/destinations/${id}/activities`}>Activities</NavLink>
                    </div>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default DestinationDetails;