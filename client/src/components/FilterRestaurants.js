import React, { useState } from "react";

function FilterRestaurants({ filterCuisine, setFilterCuisine, setFilterPrice, setFilterRating, filterPrice, filterRating }) {

    const [isMobile, setIsMobile] = useState(false);

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
    function handleMobile() {
        setIsMobile((isMobile) => !isMobile);
    }

    return (
        <>
            <div className="filter-mobile" onClick={handleMobile}>
                <i className="fa-solid fa-filter"></i>
            </div>
            <div className={isMobile ? "filter-menu active" : "filter-menu inactive"}>
                <div className="filter-mobile" onClick={handleMobile}>
                    <i className="fa-solid fa-times"></i>
                </div>
                <div className={
                    isMobile ? "filter filter-content-visible" : "filter filter-content-hidden"
                }>
                    <div>
                        <h3>Price</h3>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            onChange={handleFilterPriceChange}
                            value={filterPrice}
                        />
                    </div>
                    <div>
                        <h3>Rating</h3>
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
                    <div>
                        <h3>Cuisines</h3>
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
                    <button className="btn primary-btn mobile-btn" onClick={handleClearFilters}>Clear</button>
                </div>
            </div>
        </>
    )
}

export default FilterRestaurants;