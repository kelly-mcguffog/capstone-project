import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";

function AddActivityToItinerary() {
  const { trip_id, id } = useParams();
  const { user } = useContext(UserContext);
  const { destinations } = useContext(DestinationsContext);
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    trip_id: trip_id,
    date: "",
    activity_itinerary_times_attributes: [
      {
        time: "",
        activity_id: id
      }
    ]
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "date") {
      setFormData((prevState) => ({
        ...prevState,
        date: value
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        activity_itinerary_times_attributes: [
          {
            ...prevState.activity_itinerary_times_attributes[0],
            [name]: value
          }
        ]
      }));
    }
  }
  
  console.log(formData);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/itinerary_days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => console.log(data));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      {/* {errors.length > 0 && (
            <ul>
                {errors.map((error, index) => (
                <li key={index}>{error}</li>
                ))}
            </ul>
            )} */}
      <h1>Add a Hotel</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Itinerary Day Date:
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Hotel Itinerary Time:
          <input
            type="datetime-local"
            name="time"
            value={formData.activity_itinerary_times_attributes[0]?.time || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddActivityToItinerary;
