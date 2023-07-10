import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TripsContainer from "./TripsContainer";
import TripsListings from "./TripsListings";
import PackingListForm from "./PackingListForm";


function PackingListContainer() {
    const { user } = useContext(UserContext)

    console.log(user)
    return (
        <div className="side-bar">
            <div className="my-trips">
                <TripsListings />
            </div>
            <div className="trips">
                <h1>Packing List</h1>
                <PackingListForm />
            </div>
        </div>
    )
}

export default PackingListContainer;