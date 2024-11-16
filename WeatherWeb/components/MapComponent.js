import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    import('leaflet/dist/leaflet.css');
  }, []);

  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>pp</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
