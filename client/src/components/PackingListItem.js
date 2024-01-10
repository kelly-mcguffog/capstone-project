import React, { useState } from "react";
import { useParams } from "react-router-dom";

function PackingListItem({ packingListItem, onUpdatePackingItem, onDeletePackingItem }) {
    const { item, quantity, packed } = packingListItem;
    const { id } = useParams();
    const [isDropdown, setDropdown] = useState(false)

    const handleDropdown = () => {
        setDropdown(dropdown => !dropdown)
    }

    const handleCheckboxChange = () => {
        const newPackedStatus = !packed;
        updatePackedStatus(newPackedStatus);
    };

    const updatePackedStatus = (newPackedStatus) => {
        fetch(`/trips/${id}/packing_list_items/${packingListItem.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ packed: newPackedStatus })
        })
            .then(res => res.json())
            .then(data => onUpdatePackingItem(data))
    }

    const deleteItem = () => {
        fetch(`/trips/${id}/packing_list_items/${packingListItem.id}`, {
            method: 'DELETE',
        })
        onDeletePackingItem(packingListItem)
    }

    return (
        <div className="packing results">
            <div>
                <h3>{item}</h3>
                <small>qty. {quantity}</small>
            </div>
            <div className="packing-menu">
                <div>
                    <label className="round-checkbox">
                        <input
                            type="checkbox"
                            checked={packed}
                            onChange={handleCheckboxChange}
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="dropdown">
                    <i onClick={handleDropdown} className="fa-solid fa-bars dropbtn"></i>
                    <div className={isDropdown ? "dropdown-content visible" : "dropdown-content hidden"}>
                        <p onClick={deleteItem} className="drop-text nav-link">Delete</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackingListItem;
