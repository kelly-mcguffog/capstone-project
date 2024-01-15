import React from "react";
import SearchResults from "./SearchResults";

function Search({ search, setSearch, searchDestinations }) {

    return (
        <>
            <div className="search">
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                />
                <div id="search-icon" className="circle-container">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            {searchDestinations && searchDestinations.length > 0 && (
                <div id="search-listing">
                    {searchDestinations.map((result) => (
                        <SearchResults key={result.id} setSearch={setSearch} result={result} />
                    ))}
                </div>
            )}
        </>
    );
}

export default Search;