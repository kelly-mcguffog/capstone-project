import React from "react";
import { Link } from "react-router-dom";


function SearchResults({ result, setSearch }) {

    const { id, city, country, photo, hotels, restaurants, activities } = result
    const destination_id = id

    const handleSearch = () => {
        setSearch("");
    };

    return (
        <>
            <Link onClick={handleSearch} className="link" to={`/destinations/${destination_id}/hotels`}>
                <div className="search-results">
                    <div className="search-img-container">
                        <img className="cropped-img" alt={city} src={photo} />
                    </div>
                    <div>
                        <h3>{city}, {country}</h3>
                        <small>{hotels.length} Hotels • {restaurants.length} Restaurants • {activities.length} Activities</small>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default SearchResults;