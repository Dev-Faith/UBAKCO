import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// Fix Leaflet marker icon for Next.js: use public folder
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/marker-icon-2x.png',
    iconUrl: '/leaflet/marker-icon.png',
    shadowUrl: '/leaflet/marker-shadow.png',
  });
}

const MapClient = () => {
  // MM1 (Murtala Muhammed International Airport) coordinates
  const mm1Coords: [number, number] = [6.5774, 3.3212];
  return (
    <MapContainer center={mm1Coords} zoom={15} scrollWheelZoom={true} style={{ height: '600px', width: '100%', borderRadius: '16px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mm1Coords}>
        <Popup>
          Murtala Muhammed Int'l Airport (MM1)<br />Lagos, Nigeria
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapClient;
