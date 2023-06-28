import React, {useState} from "react";

function NewTrip(){

    const [dateTime, setDateTime] = useState("");
    const handleChange = (e) => {
        setDateTime(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dateTime);
    };

    return(
        <div className="trip-form-container">
            <form id="trip-form-wrapper" onSubmit={handleSubmit}>
                <div id="trip-form" className="form-info">
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">From</h3>
                    </div>
                    <input
                    type="text"
                    name="origin_airport"
                    autoComplete="off"
                    placeholder="Your Origin"
                    />
                </div>
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">To</h3>
                    </div>
                    <input
                    type="text"
                    name="destination_airport"
                    autoComplete="off"
                    placeholder="Your Destination"
                    />
                </div>
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">Departure</h3>
                    </div>
                    <input 
                    type="datetime-local" 
                    value={dateTime} 
                    onChange={handleChange} 
                    />
                </div>
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">Arrival</h3>
                    </div>
                    <input 
                    type="datetime-local" 
                    value={dateTime} 
                    onChange={handleChange} 
                    />
                </div>
                <div className="label">
                <div className="input-text">
                    <h3 className="input-title">Flight Number</h3>
                    </div>
                    <input
                    type="text"
                    name="flight_number"
                    autoComplete="off"
                    placeholder="i.e. AA353"
                    />
                </div>
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">Confirmation Number</h3>
                    </div>
                    <input
                    type="text"
                    name="confirmation_number"
                    autoComplete="off"
                    placeholder="9-Digit Code"
                    />
                </div>
                </div>
                <div className="form-button">
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </form>
        </div>
    )
}

export default NewTrip;