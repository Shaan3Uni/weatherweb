import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    import('leaflet/dist/leaflet.css');
  }, []);

  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');

  return (
    <MapContainer
      center={[43.461249, -80.517577]}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[43.461249, -80.517577]}>
        <Popup>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e738c17-7f3c-422e-8225-f8c782b08626/df2r1el-90bed6c3-aa87-4d42-9120-0ab731b1ea26.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlNzM4YzE3LTdmM2MtNDIyZS04MjI1LWY4Yzc4MmIwODYyNlwvZGYycjFlbC05MGJlZDZjMy1hYTg3LTRkNDItOTEyMC0wYWI3MzFiMWVhMjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.y17nc91l3mjY4laTfdpNz0Y_6U2o3xdoi6nuvNSklhQ" style={{width:50, height:'auto'}}/>
            
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
