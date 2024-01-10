import React from "react";

function ErrorMessage({ deleteError, errors }) {

    return (
        <>
            {(errors["hotel_itinerary_times"] ||
                errors["activity_itinerary_times"] ||
                errors["restaurant_itinerary_times"]) && (
                    <div className="error-popup">
                        <div className="error-icon circle-container">
                            <i className="fa-solid fa-exclamation"></i>
                        </div>
                        <div className="error-text-wrapper">
                            <div className="error-text-container">
                                <h2 className="error-text">Error</h2>
                                {errors["hotel_itinerary_times"] && (
                                    errors["hotel_itinerary_times"].map(error => (
                                        <p key={error} className="error-message pop-up-error">
                                            {error}
                                        </p>
                                    ))
                                )}
                                {errors["restaurant_itinerary_times"] && (
                                    <p className="error-message pop-up-error">
                                        {errors["restaurant_itinerary_times"]}
                                    </p>
                                )}
                                {errors["activity_itinerary_times"] && (
                                    <p className="error-message pop-up-error">
                                        {errors["activity_itinerary_times"]}
                                    </p>
                                )}
                            </div>
                            <button className="btn primary-btn error-btn" onClick={deleteError}>
                                Try Again
                            </button>
                        </div>
                    </div>
                )}
        </>
    );
}

export default ErrorMessage;
