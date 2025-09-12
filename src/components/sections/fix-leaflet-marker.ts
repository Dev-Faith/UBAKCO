// This file is not imported, but is a reference for fixing Leaflet marker icon issues in Next.js/react-leaflet
// You need to set the default marker icon manually because Leaflet's default icon image is not bundled by Next.js

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default icon path for Leaflet markers
const DefaultIcon = L.icon({
  iconUrl: typeof window !== 'undefined' ? require('leaflet/dist/images/marker-icon.png') : '',
  shadowUrl: typeof window !== 'undefined' ? require('leaflet/dist/images/marker-shadow.png') : '',
  iconRetinaUrl: typeof window !== 'undefined' ? require('leaflet/dist/images/marker-icon-2x.png') : '',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;
