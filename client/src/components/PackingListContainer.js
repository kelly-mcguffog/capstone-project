import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import TripsListings from "./TripsListings";
import PackingListForm from "./PackingListForm";
import PackingList from "./PackingList";

function PackingListContainer() {
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();

  const trip = user.trips.find((trip) => trip.id === parseInt(id));

  const onAddPackingListItem = (newItem) => {
    const userTrips = user.trips.map((trip) => {
      if (trip.id === parseInt(id)) {
        return { ...trip, packing_list_items: [...trip.packing_list_items, newItem] };
      } else {
        return trip;
      }
    });
    setUser({ ...user, trips: userTrips });
  };

  console.log(user);
  return (
    <div className="side-bar">
      <div className="my-trips">
        <TripsListings />
      </div>
      <div className="trips">
        <PackingListForm onAddPackingListItem={onAddPackingListItem} />
        <PackingList trip={trip} />
      </div>
    </div>
  );
}

export default PackingListContainer;