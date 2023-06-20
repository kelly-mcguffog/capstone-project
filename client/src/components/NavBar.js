import React, {useContext} from "react";
import { UserContext } from "../context/UserContext";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    const {user, setUser} = useContext(UserContext)
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <header>
            <Link to="/"><h3 className="navbar logo">Wanderlust</h3></Link>
            <div className="navbar">
                {user ? (
                    <>
                        {/* <NavLink to="/destinations">Destinations</NavLink>
                        <NavLink to="/profile">Profile</NavLink> */}
                        <button className="logout" onClick={handleLogoutClick}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/signup">Signup</Link>
                        <Link className="logout" to="/login">Login</Link>
                    </>
                )}
            </div>
        </header>
    );
}

export default NavBar;