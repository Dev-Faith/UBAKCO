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
  return (
    <MapContainer center={[6.5244, 3.3792]} zoom={6} scrollWheelZoom={true} style={{ height: '600px', width: '100%', borderRadius: '16px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[6.5244, 3.3792]}>
        <Popup>
          Lagos, Nigeria<br /> Ubakco HQ
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapClient;
