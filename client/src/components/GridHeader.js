import React from "react-router-dom";

function GridHeader({ photo1, photo2, photo3 }) {

    return (
        <>
            <div className="header-img multiple-images">
                <div
                    className="grid-image big-image"
                    style={{ backgroundImage: `url(${photo1})` }}
                />
                <div
                    className="grid-image small-image"
                    style={{ backgroundImage: `url(${photo2})` }}
                />
                <div
                    className="grid-image small-image"
                    style={{ backgroundImage: `url(${photo3})` }}
                />
            </div>
        </>
    );
}

export default GridHeader;