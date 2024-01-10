import React from "react";
import Search from "./Search";

function Header({ search, setSearch, searchDestinations }) {

    return (
        <div className="page-header">
            <div className="cropped-img-container">
                <img className="cropped-img" src="https://cdn.shopify.com/s/files/1/2717/4174/products/Wanderlust_Hiking_on_Legendary_Trails_book_gestalten_05_2000x.jpg?v=1583927941" alt="travel-img"></img>
            </div>
            <div className="header">
                <div className="header-text">
                    <h1 className="header-copy">Wanderlust</h1>
                    <h4 className="header-copy">
                        Travel the world with ease and make the most of your adventures. Build
                        itineraries, manage packing lists, and share your travel information
                        with friends and family.
                    </h4>
                </div>
                <div className="results">
                    <div className="nav">
                        <h3>Discover Popular Destinations</h3>
                    </div>
                    <Search
                        search={search}
                        setSearch={setSearch}
                        searchDestinations={searchDestinations}
                    />
                </div>
            </div>
        </div>
    );
}


export default Header;