import React from "react";

function Search({ search, setSearch }) {



    return (
        <>
            <div className="search">
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
                <i className="fa-solid fa-magnifying-glass"></i>

            </div>
        </>
    );
}

export default Search;