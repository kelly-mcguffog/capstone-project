import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import LoadingScreen from "./LoadingScreen";

function HotelDetails() {
  const [hotels, setHotels] = useState([]);
  const { id } = useParams()
  
    useEffect(() => {
        fetch(`/hotels`)
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])

    const hotel = hotels.find(hotel => hotel.id === parseInt(id))

    if (!hotel) return <LoadingScreen />

  return <Details type="hotel" details={hotel} />;
}

export default HotelDetails;
