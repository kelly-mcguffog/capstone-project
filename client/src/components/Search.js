import React from "react";

function Search({search, setSearch}){
    return (
        <>
          <div className="search">
              {/* <input type="search" placeholder="&#xF002;" onChange={(e)=> setSearch(e.target.value)} className="input-search fa-solid fa-magnifying-glass" value={search}/> */}
              <input type="search" placeholder="Search..." />
              <i className="fa-solid fa-magnifying-glass"></i>

          </div> 
        </>
    );
}

export default Search;