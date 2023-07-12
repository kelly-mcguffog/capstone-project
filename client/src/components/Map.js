import React, { useMemo } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

function Map({ latitude, longitude }) {
    const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
            <Marker position={{ lat: latitude, lng: longitude }} />
        </GoogleMap>
    );
}

export default Map;
