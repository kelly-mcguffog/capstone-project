import React, { useState } from "react";

function Filter({ type, setFilterPrice, setFilterRating, setFilterDuration, setFilterCuisine, filterPrice, filterRating, filterDuration, filterCuisine }) {
    const [isMobile, setIsMobile] = useState(false);

    const handleFilterRatingChange = (event) => {
        setFilterRating(event.target.value);
    };

    const handleFilterPriceChange = (event) => {
        setFilterPrice(parseFloat(event.target.value));
    };

    const handleFilterDurationChange = (event) => {
        const { value } = event.target;

        if (value === "Up to 1 hour" || value === "1 to 4 hours" || value === "4 hours to 1 day") {
            setFilterDuration(value);
        } else {
            setFilterDuration("");
        }
    };

    const handleFilterCuisineChange = (event) => {
        setFilterCuisine(event.target.value);
    };

    const handleClearFilters = () => {
        if (type === "restaurants") {
            setFilterCuisine(false);
            setFilterRating(false);
        } else if (type !== "activities") {
            setFilterRating(false);
        } else {
            setFilterDuration(false);
        }
        setFilterPrice(0);
    };


    const handleMobile = () => {
        setIsMobile((isMobile) => !isMobile);
    };

    return (
        <>
            <div className="filter-mobile" onClick={handleMobile}>
                <i className="fa-solid fa-filter"></i>
            </div>
            <div className={isMobile ? "filter-menu active" : "filter-menu inactive"}>
                <div className="mobile-icon" onClick={handleMobile}>
                    <i className="fa-solid fa-times"></i>
                </div>
                <div className={isMobile ? "filter filter-content-visible" : "filter filter-content-hidden"}>
                    <div>
                        <h3>Price</h3>
                        <input type="range" min={type === "activities" ? "0" : "1"} max={type === "activities" ? "500" : "5"} step={type === "activities" ? "10" : ""} onChange={handleFilterPriceChange} value={filterPrice} />
                    </div>
                    {type !== "activities" && (
                        <div>
                            <h3>Rating</h3>
                            <div className="filter-input">
                                {[5, 4, 3, 2, 1].map((star) => (
                                    <label key={star}>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={star}
                                            checked={filterRating === `${star}`}
                                            onChange={handleFilterRatingChange}
                                        />
                                        {`${star} Stars`}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                    {type === "activities" && (
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
                    )}
                    {type === "restaurants" && (
                        <div>
                            <h3>Cuisines</h3>
                            <div className="filter-input full-filter">
                                {["French", "American", "Italian", "Mexican", "Indian"].map((cuisine) => (
                                    <label key={cuisine}>
                                        <input
                                            type="checkbox"
                                            value={cuisine}
                                            checked={filterCuisine === cuisine}
                                            onChange={handleFilterCuisineChange}
                                        />
                                        {cuisine}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                    <button className="btn primary-btn mobile-btn" onClick={handleClearFilters}>
                        Clear
                    </button>
                </div>
            </div>
        </>
    );
}

export default Filter;
