import React, {useState} from "react";
import Header from "./Header";
import TopDestinations from "./TopDestinations"
import TopHotels from "./TopHotels";
import TopRestaurants from "./TopRestaurants";


function Home() {

    const [currentComponent, setCurrentComponent] = useState('top-hotels');
 

const handleButtonClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="header">
        <Header />
        <h1 className="spotlight-header">Explore Popular Destinations</h1>
        <TopDestinations />
        <div className="grid">
            <h1 className="spotlight-header deals">Discover the Best Deals</h1>
            <div className="filter-deals">
                <button 
                onClick={() => handleButtonClick('top-hotels')} 
                className="btn"
                style={{
                    backgroundColor: currentComponent === 'top-hotels' ? '#0c0132' : 'initial',
                    color: currentComponent === 'top-hotels' ? 'white' : 'initial',
                  }}
                  >
                    Hotels
                    </button>
                <button 
                onClick={() => handleButtonClick('top-restaurants')} 
                className="btn"
                style={{
                    backgroundColor: currentComponent === 'top-restaurants' ? '#0c0132' : 'initial',
                    color: currentComponent === 'top-restaurants' ? 'white' : 'initial',
                  }}
                  >
                    Restaurants
                    </button>
                <button 
                onClick={() => handleButtonClick('top-activities')} 
                className="btn"
                style={{
                    backgroundColor: currentComponent === 'top-activities' ? '#0c0132' : 'initial',
                    color: currentComponent === 'top-activities' ? 'white' : 'initial',
                  }}
                  >
                    Activities
                    </button>
            </div>
        </div>

      {currentComponent === 'top-hotels' && <TopHotels/> }
      {currentComponent === 'top-restaurants' && <TopRestaurants/> }
    </div>
  );
}

export default Home;