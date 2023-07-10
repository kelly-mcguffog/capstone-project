import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";

function PackingListItem({ item, onUpdatePackingItem }) {
  const { name, quantity, packed } = item;
  const { id } = useParams();

  const handleCheckboxChange = () => {
    const newPackedStatus = !packed;
    updatePackedStatus(newPackedStatus);
  };

//   const updatePackedStatus = async (newPackedStatus) => {
//     try {
//       const response = await fetch(
//         `/trips/${id}/packing_list_items/${item.id}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ packed: newPackedStatus }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Error updating packed status.");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

const updatePackedStatus = (newPackedStatus) => {
    fetch( `/trips/${id}/packing_list_items/${item.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({packed: newPackedStatus})
    })
    .then(res => res.json())
    .then(data => onUpdatePackingItem(data))
}

  return (
    <div className="packing-list">
      <div className="list">
        <h3 className="packing-item">{name}</h3>
        <small>qty. {quantity}</small>
      </div>
      <label className="round-checkbox">
      <input
        type="checkbox"
        checked={packed}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default PackingListItem;
