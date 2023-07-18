import React, { useMemo } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

function UserMap({ destinationMarkers }) {
    const center = useMemo(() => {
        if (destinationMarkers.length > 0) {
            const { latitude, longitude } = destinationMarkers[0];
            return { lat: latitude, lng: longitude };
        }
        return null;
    }, [destinationMarkers]);

    return (
        <GoogleMap zoom={2} center={center} mapContainerClassName='user-map-container'>
            {destinationMarkers.map((destination, index) => (
                <Marker
                    key={index}
                    position={{ lat: destination.latitude, lng: destination.longitude }}
                />
            ))}
        </GoogleMap>
    );
}

export default UserMap;
