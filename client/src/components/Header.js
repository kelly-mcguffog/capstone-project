import React from "react";
import Search from "./Search";

function Header({ search, setSearch, searchDestinations }) {
    return (
      <div className="header-text">
        <h1 className="title">Wanderlust</h1>
        <h5 className="subtitle">
          Travel the world with ease and make the most of your adventures. Build
          itineraries, manage packing lists, and share your travel information
          with friends and family.
        </h5>
        <div className="results">
          <div className="nav home-nav">
            <h1 className="spotlight-header">Discover Popular Destinations</h1>
          </div>
          <Search
            search={search}
            setSearch={setSearch}
            searchDestinations={searchDestinations}
          />
        </div>
      </div>
    );
  }
  

export default Header;