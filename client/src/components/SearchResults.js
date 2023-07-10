import React from "react";
import { Link } from "react-router-dom";


function SearchResults({ result }) {
console.log(result)

const {id, city, country, photo, hotels, restaurants, activities} = result

    return (
        <>
        <Link className="link" to={`/destinations/${id}/trips`}>
        <div className="search-results">
             <div className="img-container search-img-container">
                    <img className="img" src={photo} />
                </div>
                <div>
                    <h3 className="city">{city}, {country}</h3>
                    <small>{hotels.length} Hotels • {restaurants.length} Restaurants • {activities.length} Activities</small>
                </div>
        </div>
        </Link>
        <hr></hr>
        </>
    );
}

export default SearchResults;