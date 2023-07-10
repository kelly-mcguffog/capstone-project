import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function PackingListForm({onAddPackingListItem}) {
    const { id } = useParams()
    const { user } = useContext(UserContext)
    const [errors, setErrors] = useState([])

    const initialState = {
        name: "",
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
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div className="packing-form-wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Packing to-do list</h1>
                <div className="packing-form">
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">Item</h3>
                    </div>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        className="form-input"
                        placeholder="i.e. socks"
                        autoComplete="off"
                    />
                </div>
                <div className="label">
                    <div className="input-text">
                        <h3 className="input-title">Quantity</h3>
                    </div>
                    <input
                        type="text"
                        name="quantity"
                        onChange={handleChange}
                        value={formData.quantity}
                        className="form-input"
                        placeholder="i.e. 10"
                        autoComplete="off"
                    />
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