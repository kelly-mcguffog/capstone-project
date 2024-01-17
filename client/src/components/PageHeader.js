import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Search from "./Search";

function PageHeader({ title, subtitle, imageSrc, search, setSearch, searchDestinations, addTripLink, navText, navLinks }) {
    const { destination_id, id } = useParams();

    const getUrlFormat = (component) => {
        if (id !== undefined) {
            return `/destinations/${destination_id}/trips/${id}/${component}`;
        } else {
            return `/destinations/${destination_id}/${component}`;
        }
    };

    return (
        <div className="page-header">
            <div className={subtitle ? "subtitle-header cropped-img-container" : "cropped-img-container"}>
                <img className="cropped-img img-header" src={imageSrc} alt={title}></img>
            </div>
            <div id={subtitle ? "subtitle-header" : ""} className={navLinks && id ? "header" : "header details-nav-header"}>
                <div className="header-text">
                    <h1 className="header-copy">{title}</h1>
                    {subtitle && <h3 className="header-copy">{subtitle}</h3>}
                    {addTripLink && !id && (
                        <Link className="btn primary-btn" to={`/destinations/${destination_id}/trips`}>
                            Add a Trip
                        </Link>
                    )}
                </div>
                <div className="results">
                    <div className="nav">
                        {navText && <h3>{navText}</h3>}
                        {navLinks?.map((navLink) => (
                            <NavLink key={navLink.to} className="link" to={getUrlFormat(navLink.to)}>
                                {navLink.label}
                            </NavLink>
                        ))}
                    </div>
                    <Search search={search} setSearch={setSearch} searchDestinations={searchDestinations} />
                </div>
            </div>
        </div>
    );
}

export default PageHeader;