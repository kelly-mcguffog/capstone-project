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

    console.log(errors)
    return (
        <div className="packing-form-wrapper">
            <form className="packing-form-container" onSubmit={handleSubmit}>
                <h1 className="packing-list-header-text">Packing to-do list</h1>
                {/* {errors.length > 0 && (
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                )} */}
                <div className="packing-form">
                    <div className="label packing-label">
                        <div className="input-text">
                            <h3 className="input-title">Item</h3>
                        </div>
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
                    <div className="label packing-label">
                        <div className="input-text">
                            <h3 className="input-title">Quantity</h3>
                        </div>
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
                    <button type="submit">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </form>
        </div>
    );

}

export default PackingListForm;