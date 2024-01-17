import React, { useState } from "react";
import { useParams } from "react-router-dom";

function PackingListForm({ onAddPackingListItem }) {

    const { id } = useParams()
    const [errors, setErrors] = useState([])

    const initialState = {
        item: "",
        quantity: "",
        packed: false,
        trip_id: id
    }

    const [formData, setFormData] = useState(initialState)

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        setErrors((prevErrors) => ({
            ...prevErrors,
            [event.target.name]: null,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/trips/${id}/packing_list_items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((r) => {
            if (r.ok) {
                r.json().then((newItem) => onAddPackingListItem(newItem));
                setFormData(initialState)
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div className="details">
            <form className="packing-list-form" onSubmit={handleSubmit}>
                <h1 id="packing-header">Packing to-do list</h1>
                <div className="trip-form packing-form">
                    <div>
                        <h3>Item</h3>
                        <input
                            type="text"
                            name="item"
                            onChange={handleChange}
                            value={formData.item}
                            placeholder="i.e. socks"
                            autoComplete="off"
                            className={`trip-form-input ${errors.item ? "input-error" : ""
                                }`}
                        />
                        {errors.item && (
                            <span className="error-message">
                                {Array.isArray(errors.item)
                                    ? errors.item.join(", ")
                                    : errors.item}
                            </span>
                        )}
                    </div>
                    <div>
                        <h3>Quantity</h3>
                        <input
                            type="text"
                            name="quantity"
                            onChange={handleChange}
                            value={formData.quantity}
                            placeholder="i.e. 10"
                            autoComplete="off"
                            className={`trip-form-input ${errors.quantity ? "input-error" : ""
                                }`}
                        />
                        {errors.quantity && (
                            <span className="error-message">
                                {Array.isArray(errors.quantity)
                                    ? errors.quantity.join(", ")
                                    : errors.quantity}
                            </span>
                        )}
                    </div>
                    <button className="submit-arrow" type="submit">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </form>
        </div>
    );

}

export default PackingListForm;