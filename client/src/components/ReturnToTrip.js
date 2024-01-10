import React from "react";
import { useParams, Link } from "react-router-dom";

function ReturnToTrip() {
    const { trip_id } = useParams();

    return (
        <>
            {trip_id && (
                <div className="back-link-btn">
                    <Link className="link" to={`/trips/${trip_id}`}>
                        <p>Return to Trip</p>
                        <i className="fa-sharp fa-solid fa-circle-chevron-right nav-arrow"></i>
                    </Link>
                </div>
            )}
        </>
    );
}

export default ReturnToTrip;
