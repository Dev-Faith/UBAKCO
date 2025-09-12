
"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
// Fix Leaflet marker icon for Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <div className="w-full w-screen flex justify-center z-[7] relative h-full">
      <section className='max-w-[1440px] w-full px-[16px] lg:min-h-[719px] sm:px-[60px] flex items-center justify-center lg:py-[170px] bg-[#ffffff] py-[35px] sm:py-[90px]'>
        <MapContainer center={[6.5244, 3.3792]} zoom={6} scrollWheelZoom={true} style={{ height: '400px', width: '100%', borderRadius: '10px' }}>
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
      </section>
    </div>
  )
}

export default Map
