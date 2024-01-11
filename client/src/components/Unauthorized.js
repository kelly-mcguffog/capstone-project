import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Unauthorized() {
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();

    const isLoginPage = location.pathname === "/login";
    const isSignupPage = location.pathname === "/signup";

    const handleSignInClick = () => {
        setIsVisible(false);
    };

    if (!isVisible || isLoginPage || isSignupPage) {
        return null;
    }

    return (
        <div className="error-popup restricted-access-popup">
            <div className="error-icon circle-container">
                <i className="fa-solid fa-exclamation"></i>
            </div>
            <div className="error-text-wrapper">
                <div className="error-text-container">
                    <h2 className="error-text">401 – Unauthorized</h2>
                    <p className="error-message pop-up-error">
                        This page is restricted. You must be logged in to access it.
                    </p>
                </div>
                <Link to="/login" onClick={handleSignInClick} className="btn primary-btn error-btn">Sign In</Link>
            </div>
        </div>
    );
}

export default Unauthorized;