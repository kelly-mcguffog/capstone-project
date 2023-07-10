import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TripsListings from "./TripsListings";
import PackingListForm from "./PackingListForm";
import PackingList from "./PackingList";


function PackingListContainer() {
    const { user } = useContext(UserContext)

    console.log(user)
    return (
        <div className="side-bar">
            <div className="my-trips">
                <TripsListings />
            </div>
            <div className="trips">
                <PackingListForm />
                <PackingList />
            </div>
        </div>
    )
}

export default PackingListContainer;