import React from "react";
import Search from "./Search";

function Header({search, setSearch}){
    return(
        <div className="header-text">
            <h1 className="title">Wanderlust</h1>
            <h3 className="subtitle">Travel the world with ease</h3>
            <Search search={search} setSearch={setSearch}/>
        </div>
    )
}

export default Header;