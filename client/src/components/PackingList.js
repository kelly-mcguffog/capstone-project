import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import PackingListItem from "./PackingListItem";

function PackingList({ trip }) {

    const { user, setUser } = useContext(UserContext);
    const { id } = useParams();
    const packingListItems = trip?.packing_list_items ?? [];

    const onUpdatePackingItem = (packingListItem) => {
        const userTrips = user.trips.map((trip) => {
            if (trip.id === parseInt(id)) {
                const updatedPackingList = trip.packing_list_items.map((packingItem) => {
                    if (packingItem.id === packingListItem.id) {
                        return packingListItem;
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

    const onDeletePackingItem = (packingListItem) => {
        const userTrips = user.trips.map((trip) => {
            if (trip.id === parseInt(id)) {
                const updatedPackingList = trip.packing_list_items.filter(
                    (packingItem) => packingItem.id !== packingListItem.id
                );
                return { ...trip, packing_list_items: updatedPackingList };
            } else {
                return trip;
            }
        });
        setUser({ ...user, trips: userTrips });
    };

    return (
        <div className="packing-details">
            {packingListItems.map((packingListItem) => {
                return (
                    <PackingListItem
                        key={packingListItem.id}
                        trip={trip}
                        packingListItem={packingListItem}
                        onDeletePackingItem={onDeletePackingItem}
                        onUpdatePackingItem={onUpdatePackingItem}
                    />
                );
            })}
        </div>
    );
}

export default PackingList;
