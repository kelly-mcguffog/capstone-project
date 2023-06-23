import React, {useState, useEffect} from "react";
import PageHeader from "./PageHeader";
// import { useParams } from "react-router-dom";
import { useLoadScript } from '@react-google-maps/api';
import Map from "./Map";

function DestinationDetails(){

    // const { id } = useParams();
    const [destination, setDestination] = useState([])

    useEffect(() => {
        let isMounted = true;
    
        fetch(`/destinations/161`)
          .then(res => res.json())
          .then(data => {
            if (isMounted) {
              setDestination(data);
            }
          });
    
        return () => {
          isMounted = false;
        };
      }, []);

    const {photo, city, country, language, currency, time_zone, dial_code} = destination

    // console.log(destination)

    // const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY})

    // if(!isLoaded) return <h1>Loading</h1>

    return(
        <>

            {/* <div className="header" style={{ backgroundImage: `url(${photo})` }}> */}
            <div className="header" style={{ backgroundImage: `url('https://assets.cntraveller.in/photos/62752c1974266e7300892c46/4:3/w_5120,h_3840,c_limit/Seine%20paris%20bike-GettyImages-1161606501.jpeg')` }}>
                <PageHeader destination={destination}/>
            </div>
            <div className="card-details">
            <div className="info">
                <i className="fa-solid fa-globe"></i>
                <h3>Country: {country}</h3>
                <h3>Language: {language}</h3>
                <h3>Currency: {currency}</h3>
            </div>
            {/* <Map/> */}
        </div>
        </>
    )
}

export default DestinationDetails;