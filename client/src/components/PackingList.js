import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import PackingListItem from "./PackingListItem";

function PackingList({ trip }) {
    
    const { user, setUser } = useContext(UserContext);
    const { id } = useParams();

    const onUpdatePackingItem = (item) => {
        const userTrips = user.trips.map((trip) => {
            if (trip.id === parseInt(id)) {
                const updatedPackingList = trip.packing_list_items.map((packingItem) => {
                    if (packingItem.id === item.id) {
                        return item;
                    } else {
                        return packingItem;
                    }
                });
                return { ...trip, packing_list_items: updatedPackingList };
            } else {
                return trip;
            }
        });
        setUser({ ...user, trips: userTrips });
    };

    const onDeletePackingItem = (item) => {
        const userTrips = user.trips.map((trip) => {
            if (trip.id === parseInt(id)) {
                const updatedPackingList = trip.packing_list_items.filter(
                    (packingItem) => packingItem.id !== item.id
                );
                return { ...trip, packing_list_items: updatedPackingList };
            } else {
                return trip;
            }
        });
        setUser({ ...user, trips: userTrips });
    };

    return (
        <div id="packing">
            {trip.packing_list_items.map((item) => {
                return (
                    <PackingListItem
                        key={item.id}
                        trip={trip}
                        item={item}
                        onDeletePackingItem={onDeletePackingItem}
                        onUpdatePackingItem={onUpdatePackingItem}
                    />
                );
            })}
        </div>
    );
}

export default PackingList;
