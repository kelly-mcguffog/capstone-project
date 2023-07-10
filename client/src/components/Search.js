import React from "react";
import SearchResults from "./SearchResults"

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
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          {searchDestinations && searchDestinations.length > 0 && (
            <div>
              {searchDestinations.map((result) => (
                <SearchResults key={result.id} result={result} />
              ))}
            </div>
          )}
        </>
      );
    }

export default Search;