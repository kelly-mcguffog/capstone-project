import React from "react";
import NewTrip from "./NewTrip";

function Header(){
    return(
        <div className="header-text">
            <h1 className="title">Wanderlust</h1>
            <h5 className="subtitle">Travel the world with ease</h5>
            <button className="main-btn">Plan a trip</button>
            <NewTrip />
        </div>
    )
}

export default Header;