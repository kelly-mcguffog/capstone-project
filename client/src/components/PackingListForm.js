import React, {useContext, useState} from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function PackingListForm() {
    const { id } = useParams()
    const { user } = useContext(UserContext)
    const [errors, setErrors] = useState([])


    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/trips/${id}/packing_list`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        }).then((r) => {
            if (r.ok) {
                r.json().then((newItem) => console.log(newItem));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div>
            <form className="review-form" onSubmit={handleSubmit}>
                <h1>Packing List</h1>
                <p className="error-message">{errors}</p>
                <button className="form-button" name="submit" type="submit">Submit</button>
            </form>
        </div>
    );

}

export default PackingListForm;