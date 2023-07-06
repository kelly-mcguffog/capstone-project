import React, {useState, useContext} from "react";
import { UserContext } from "../context/UserContext";
import { Link, NavLink, useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext)
    const [isDropdown, setDropdown] = useState(false)
    
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
                navigate("/login");
            }
        });
    }

    function handleDropdown(){
        setDropdown(isDropdown => !isDropdown)
    }

    return (
        <header>
            <Link to="/"><h3 className="navbar logo">Wanderlust</h3></Link>
            <div className="navbar">
                {user ? (
                    <>
                        {/* <NavLink to="/">Destinations</NavLink>   */}
                        <div className="dropdown">
                            <h3 onClick={handleDropdown} className="dropbtn">{user.first_name} {user.last_name} <i className="fa-solid fa-caret-down"></i></h3>
                            <div className={isDropdown ? "dropdown-content visible" : "dropdown-content hidden"}>
                                <Link to={`users/${user.id}/trips`}>Profile</Link>
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
    );
}

export default NavBar;