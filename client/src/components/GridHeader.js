import React from "react-router-dom";

function GridHeader({ photo1, photo2, photo3 }) {

    return (
        <div className="multiple-images">
            <img className="grid-image big-image" src={photo1} alt="travel-img"></img>
            <img className="grid-image small-image" src={photo2} alt="travel-img"></img>
            <img className="grid-image small-image" src={photo3} alt="travel-img"></img>
        </div>
    );
}

export default GridHeader;