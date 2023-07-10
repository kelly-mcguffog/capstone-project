import React from "react";

function FilterRestaurants({ filterPrice, setFilterRating, setFilterCuisine, setFilterPrice }) {


    const handleFilterRatingChange = (event) => {
        setFilterRating(event.target.value);
    };

    const handleFilterCuisineChange = (event) => {
        setFilterCuisine(event.target.value);
    };

    const handleFilterPriceChange = (event) => {
        setFilterPrice(parseInt(event.target.value));
    }

    return (
        <div className="filter">
            <div className="price">
                <h2>Price</h2>
                <input
                    type="range"
                    min="1"
                    max="5"
                    onChange={handleFilterPriceChange}
                    value={filterPrice}
                />
            </div>
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
            <div className="cuisines">
                <h2>Cuisines</h2>
                <label>
                    <input
                        type="checkbox"
                        value="French"
                        onChange={handleFilterCuisineChange}
                    />
                    French
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="American"
                        onChange={handleFilterCuisineChange}
                    />
                    American
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Italian"
                        onChange={handleFilterCuisineChange}
                    />
                    Italian
                </label>

                <label>
                    <input
                        type="checkbox"
                        value="Mexican"
                        onChange={handleFilterCuisineChange}
                    />
                    Mexican
                </label>

                <label>
                    <input
                        type="checkbox"
                        value="Indian"
                        onChange={handleFilterCuisineChange}
                    />
                    Indian
                </label>

            </div>
        </div>
    )
}

export default FilterRestaurants;