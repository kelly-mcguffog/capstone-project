import React, { useState, useEffect } from "react";
import TopActivitiesCard from "./TopActivitiesCard";

function TopActivities() {
  const [topActivities, setTopActivities] = useState([]);
  const [isMounted, setIsMounted] = useState(true);


  useEffect(() => {
    setIsMounted(true);

    const fetchTopActivities = async () => {
      const response = await fetch('/top-activities');
      const data = await response.json();

      if (isMounted) {
        setTopActivities(data);
      }
    };

    fetchTopActivities();

    return () => {
      setIsMounted(false);
    };
  }, []);

  const renderTopActivities = topActivities.map(activity => <TopActivitiesCard key={activity.id} activity={activity} />)



  return (
    <div className="body-copy">
    <div className="row">
      {renderTopActivities}
    </div>
    </div>
  );
}

export default TopActivities;