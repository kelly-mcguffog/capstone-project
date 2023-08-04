import React from "react";

function ErrorMessage({ deleteError, errors }) {

    return (
        <>
            {(errors["hotel_itinerary_times"] ||
                errors["activity_itinerary_times"] ||
                errors["restaurant_itinerary_times"]) && (
                    <div className="error-popup">
                        <div className="error-icon">
                            <i className="fa-solid fa-exclamation"></i>
                        </div>
                        <h2 className="error-text">Error</h2>
                        {errors["hotel_itinerary_times"] && (
                            <span className="error-message pop-up-error">
                                {errors["hotel_itinerary_times"]}
                            </span>
                        )}
                        {errors["restaurant_itinerary_times"] && (
                            <span className="error-message pop-up-error">
                                {errors["restaurant_itinerary_times"]}
                            </span>
                        )}
                        {errors["activity_itinerary_times"] && (
                            <span className="error-message pop-up-error">
                                {errors["activity_itinerary_times"]}
                            </span>
                        )}
                        <button className="page-btn main-btn error-btn" onClick={deleteError}>
                            Try Again
                        </button>
                    </div>
                )}
        </>
    );
}

export default ErrorMessage;
