import React from "react";
import PageHeader from "./PageHeader";

function Header({ search, setSearch, searchDestinations }) {
  return (
    <PageHeader
      title="Wanderlust"
      subtitle="Travel the world with ease and make the most of your adventures. Build itineraries, manage packing lists, and share your travel information with friends and family."
      imageSrc="https://cdn.shopify.com/s/files/1/2717/4174/products/Wanderlust_Hiking_on_Legendary_Trails_book_gestalten_05_2000x.jpg?v=1583927941"
      navText="Discover Popular Destinations"
      search={search}
      setSearch={setSearch}
      searchDestinations={searchDestinations}
    />
  );
}

export default Header;
