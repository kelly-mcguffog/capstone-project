import React from "react";
// import { UserContext } from "../context/UserContext";

function Search({search, setSearch}){
    return (
        <>
          {/* <Filter handleFilter={handleFilter} /> */}
          <div className="search">
              <input type="search" placeholder="search..." onChange={(e)=> setSearch(e.target.value)} className="input-search" value={search}/>
          </div> 
        </>
    );
}

export default Search;