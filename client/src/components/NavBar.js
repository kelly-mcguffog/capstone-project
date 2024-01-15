import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import TripsListings from "./TripsListings";

function NavBar() {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [isDropdown, setDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
                navigate("/login");
            }
        });
    }

    function handleDropdown() {
        setDropdown((isDropdown) => !isDropdown);
    }

    function handleMobile() {
        setIsMobile((isMobile) => !isMobile);
    }

    const handleMenuItemClick = () => {
        setDropdown(false);
    };

    if (!user) {
        return null;
    }
    return (
        <header>
            <div className="navbar-header">
                <Link to="/">
                    <h3 className="navbar logo">Wanderlust</h3>
                </Link>
                <div id="nav-right" className={isMobile ? "navbar active" : "navbar inactive"}>
                    <div className="dropdown">
                        <h3 onClick={handleDropdown} className="dropbtn">
                            {user.first_name} {user.last_name}{" "}
                            <i className="fa-solid fa-caret-down"></i>
                        </h3>
                        <div
                            className={
                                isDropdown || isMobile ? "nav-dropdown-content visible" : "navdropdown-content hidden"
                            }
                        >
                            <Link onClick={handleMenuItemClick} to={`/profile`}>
                                <h3 className="nav-link">Profile</h3>
                            </Link>
                            <hr className="nav-line"></hr>
                            {isMobile ?
                                <>
                                    <TripsListings isMobile={isMobile}/>
                                    <hr className="nav-line"></hr>
                                </>
                                : null}
                            <button className="nav-link navlink-button" onClick={handleLogoutClick}>
                                <h3 className="nav-link">Logout</h3>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mobile-icon" onClick={handleMobile}>
                    <i id="bar" className={isMobile ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
                </div>
            </div>
        </header>
    );
}


export default NavBar;
