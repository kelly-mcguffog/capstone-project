import React, {useState, useContext} from "react";
import { UserContext } from "../context/UserContext";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";

function NavBar() {
    const {user, setUser} = useContext(UserContext)
    const [isDropdown, setDropdown] = useState(false)
    
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    function handleDropdown(){
        setDropdown(isDropdown => !isDropdown)
    }

    return (
        <div className="header">
        <header>
            <Link to="/"><h3 className="navbar logo">Wanderlust</h3></Link>
            <div className="navbar">
                {user ? (
                    <>
                        <NavLink to="/destinations">Destinations</NavLink>
                        {/* <NavLink to="/profile">Profile</NavLink> */}
                        <div className="dropdown">
                            <h3 onClick={handleDropdown} className="dropbtn">{user.first_name} {user.last_name} <i className="fa-solid fa-caret-down"></i></h3>
                            <div className={isDropdown ? "dropdown-content visible" : "dropdown-content hidden"}>
                                <Link to="/profile">Profile</Link>
                                <hr></hr>
                                <button className="logout" onClick={handleLogoutClick}>Logout</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/signup">Signup</Link>
                        <Link className="logout" to="/login">Login</Link>
                    </>
                )}
            </div>
        </header>
        <Header />
        </div>
    );
}

export default NavBar;