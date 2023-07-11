import React, {useMemo} from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

function Map({longitude, latitude}) {

    const center = useMemo(() => ({lat: latitude, lng: longitude}),[])
    return(
        <GoogleMap 
        zoom={10} 
        center={center} 
        mapContainerClassName='map-container'>
            <Marker position={{lat:latitude, lng:longitude}}/>
        </GoogleMap>
    )
  }
  
  export default Map;