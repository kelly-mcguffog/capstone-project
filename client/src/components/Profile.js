import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import TripsListings from "./TripsListings";
import NavBar from "./NavBar";

function Profile() {
    
    const { user } = useContext(UserContext);

    if (!user) {
        return null;
    }

    console.log(user)
    return (
        <div className="side-bar">
            <div className="my-trips">
                <TripsListings />
            </div>
            <div className="trips welcome-header">
                <NavBar />
                <div className="greeting-message">
                    <h3 className="greeting">Welcome back, {user.first_name}!</h3>
                    <h1 className="greeting">Let's plan your vacation</h1>
                </div>
                <div className="img-container">
                    <img className="img" alt={user.username} src={user.avatar.url} />
                </div>
            </div>
        </div>
    );
}

export default Profile;
