import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ custom }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isDropdown, setDropdown] = useState(false);

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

  const handleMenuItemClick = () => {
    setDropdown(false);
  };

  if (!user) {
    return null;
  }

  if (!custom) {
    return (
      <header>
        <div className="navbar-header">
          <Link to="/">
            <h3 className="navbar logo">Wanderlust</h3>
          </Link>
          <div className="navbar">
            <div className="dropdown">
              <h3 onClick={handleDropdown} className="dropbtn">
                {user.first_name} {user.last_name}{" "}
                <i className="fa-solid fa-caret-down"></i>
              </h3>
              <div
                className={
                  isDropdown ? "dropdown-content visible" : "dropdown-content hidden"
                }
              >
                <Link onClick={handleMenuItemClick} to={`/users/${user.id}/trips`}>
                  Profile
                </Link>
                <hr></hr>
                <button className="logout" onClick={handleLogoutClick}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return null;
}

export default NavBar;
