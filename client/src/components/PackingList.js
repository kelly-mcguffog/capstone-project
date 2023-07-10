import React, {useContext} from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import PackingListItem from "./PackingListItem";


function PackingList(){
    const { user, setUser } = useContext(UserContext)
    const { id } = useParams()

    const trip = user.trips.find(trip => trip.id === parseInt(id))

    const onUpdatePackingItem = (item) => {
        console.log(item)
        const userTrips = user.trips.map(trip => {
            if(trip.id === parseInt(id)){
                const updatedPackingList = trip.packing_list_items.map(packingItem => {
                    if(packingItem.id === item.id){
                        return item
                    } else {
                        return packingItem
                    }
                })
                return {...trip, packing_list_items: updatedPackingList}
            }
        })
        setUser({...user, trips: userTrips})
    }

    return(
        <div id="packing">
            {trip.packing_list_items.map(item => {
            return <PackingListItem key={item.id} trip={trip} item={item} onUpdatePackingItem={onUpdatePackingItem}/>
            })}
        </div>
    )
}

export default PackingList;