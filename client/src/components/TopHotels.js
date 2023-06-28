import React, { useState, useEffect } from "react";
import TopHotelsCard from "./TopHotelsCard";

function TopHotels() {
  const [topHotels, setTopHotels] = useState([]);
  const [isMounted, setIsMounted] = useState(true);


  useEffect(() => {
    setIsMounted(true);

    const fetchTopHotels = async () => {
      const response = await fetch('/top-hotels');
      const data = await response.json();

      if (isMounted) {
        setTopHotels(data);
      }
    };

    fetchTopHotels();

    return () => {
      setIsMounted(false);
    };
  }, []);

  const renderTopHotels = topHotels.map(hotel => <TopHotelsCard key={hotel.id} hotel={hotel} />)



  return (
    <div className="body-copy">
    <div className="row">
      {renderTopHotels}
    </div>
    </div>
  );
}

export default TopHotels;