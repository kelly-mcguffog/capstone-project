import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


function RestrictedAccess() {
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();

    const isLoginPage = location.pathname === "/login";
    const isSignupPage = location.pathname === "/signup";

    const handleSignInClick = () => {
        setIsVisible(false);
    };

    if (isLoginPage || isSignupPage) {
        return null;
    }

    return (
        <>
            <div className="error-popup restricted">
                <div className="error-icon">
                    <i className="fa-solid fa-exclamation"></i>
                </div>
                <h2 className="error-text">Error</h2>
                <span className="error-message pop-up-error">
                    This page is restricted. You must log in to access it.
                </span>
                <Link to="/login" onClick={handleSignInClick} className="page-btn main-btn error-btn">Sign In</Link>
            </div>
        </>
    );
}

export default RestrictedAccess;