import React, { useState } from "react";

function FilterActivities({ filterPrice, setFilterPrice, setFilterDuration, filterDuration, setFilterRating, filterRating }) {

    const [isMobile, setIsMobile] = useState(false);

    const handleFilterRatingChange = (event) => {
        setFilterRating(event.target.value);
    };

    const handleFilterDurationChange = (event) => {
        const { value } = event.target;

        if (value === "Up to 1 hour") {
            setFilterDuration(value);
        } else if (value === "1 to 4 hours") {
            setFilterDuration(value);
        } else if (value === "4 hours to 1 day") {
            setFilterDuration(value);
        } else {
            setFilterDuration("");
        }
    };


    const handleFilterPriceChange = (event) => {
        setFilterPrice(parseFloat(event.target.value));
    };

    const handleClearFilters = () => {
        setFilterRating(false)
        setFilterDuration(false)
        setFilterPrice(0)
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
                            min="0"
                            max="500"
                            step="10"
                            onChange={handleFilterPriceChange}
                            value={filterPrice}
                        />
                        <span>${filterPrice || 0}</span>
                    </div>
                    <div>
                        <h3>Duration</h3>
                        <div className="filter-input">
                            <label>
                                <input
                                    type="checkbox"
                                    value="Up to 1 hour"
                                    checked={filterDuration === "Up to 1 hour"}
                                    onChange={handleFilterDurationChange}
                                />
                                Up to 1 hour
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="1 to 4 hours"
                                    onChange={handleFilterDurationChange}
                                    checked={filterDuration === "1 to 4 hours"}
                                />
                                1 to 4 hours
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="4 hours to 1 day"
                                    onChange={handleFilterDurationChange}
                                    checked={filterDuration === "4 hours to 1 day"}
                                />
                                4 hours to 1 day
                            </label>
                        </div>
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
                                5 Stars
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="rating"
                                    value="4"
                                    checked={filterRating === "4"}
                                    onChange={handleFilterRatingChange}
                                />
                                4 Stars
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="rating"
                                    value="3"
                                    checked={filterRating === "3"}
                                    onChange={handleFilterRatingChange}
                                />
                                3 Stars
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="rating"
                                    value="2"
                                    checked={filterRating === "2"}
                                    onChange={handleFilterRatingChange}
                                />
                                2 Stars
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="rating"
                                    value="1"
                                    checked={filterRating === "1"}
                                    onChange={handleFilterRatingChange}
                                />
                                1 Stars
                            </label>
                        </div>
                    </div>
                    <button className="btn primary-btn mobile-btn" onClick={handleClearFilters}>Clear</button>
                </div>
            </div>
        </>
    )
}

export default FilterActivities;