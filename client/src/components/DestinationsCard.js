import React from "react";
import { Link } from "react-router-dom";

function DestinationsCard({ destination }) {

    const { id, city, photo } = destination

    return (
        <div>
            <Link className="card-details" to={`/destinations/${id}/hotels`}>
                <div className="img-container">
                    <img className="cropped-img" alt={city} src={photo} />
                </div>
                <div>
                    <h4>{city}</h4>
                </div>
            </Link>
        </div>
    )
}

export default DestinationsCard;