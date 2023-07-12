import React from "react";

function FilterActivities({ setFilterRating }) {

    const handleFilterRatingChange = (event) => {
        setFilterRating(event.target.value);
    };

    return (
        <div className="filter">
            <div className="rating">
                <h2>Rating</h2>
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={handleFilterRatingChange}
                    />
                    5 Stars
                </label>
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleFilterRatingChange}
                    />
                    4 Stars
                </label>

                <label>
                    <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleFilterRatingChange}
                    />
                    3 Stars
                </label>

                <label>
                    <input
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={handleFilterRatingChange}
                    />
                    2 Stars
                </label>

                <label>
                    <input
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={handleFilterRatingChange}
                    />
                    1 Stars
                </label>
            </div>
        </div>
    )
}

export default FilterActivities;