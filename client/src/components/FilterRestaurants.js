import React from "react";

function FilterRestaurants({ filterCuisine, setFilterCuisine, setFilterPrice, setFilterRating, filterPrice, filterRating }) {

    const handleFilterCuisineChange = (event) => {
        setFilterCuisine(event.target.value);
    };

    const handleFilterRatingChange = (event) => {
        setFilterRating(event.target.value);
    };

    const handleFilterPriceChange = (event) => {
        setFilterPrice(parseInt(event.target.value));
    }

    const handleClearFilters = () => {
        setFilterRating(false)
        setFilterPrice("")
        setFilterCuisine(false)
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
                <div className="filter-input">
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="5"
                            checked={filterRating === "5"}
                            onChange={handleFilterRatingChange}
                        />
                        5 <span className="star-rating">Stars</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="4"
                            checked={filterRating === "4"}
                            onChange={handleFilterRatingChange}
                        />
                        4 <span className="star-rating">Stars</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="3"
                            checked={filterRating === "3"}
                            onChange={handleFilterRatingChange}
                        />
                        3 <span className="star-rating">Stars</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="2"
                            checked={filterRating === "2"}
                            onChange={handleFilterRatingChange}
                        />
                        2 <span className="star-rating">Stars</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="1"
                            checked={filterRating === "1"}
                            onChange={handleFilterRatingChange}
                        />
                        1 <span className="star-rating">Stars</span>
                    </label>
                </div>
            </div>
            <div className="cuisines">
                <h2>Cuisines</h2>
                <div className="filter-input full-filter">
                    <label>
                        <input
                            type="checkbox"
                            value="French"
                            checked={filterCuisine === "French"}
                            onChange={handleFilterCuisineChange}
                        />
                        French
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="American"
                            checked={filterCuisine === "American"}
                            onChange={handleFilterCuisineChange}
                        />
                        American
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Italian"
                            checked={filterCuisine === "Italian"}
                            onChange={handleFilterCuisineChange}
                        />
                        Italian
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Mexican"
                            checked={filterCuisine === "Mexican"}
                            onChange={handleFilterCuisineChange}
                        />
                        Mexican
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Indian"
                            checked={filterCuisine === "Indian"}
                            onChange={handleFilterCuisineChange}
                        />
                        Indian
                    </label>
                </div>
            </div>
            <button className="page-btn main-btn filter-btn" onClick={handleClearFilters}>Clear Filters</button>
        </div>
    )
}

export default FilterRestaurants;