'use client'

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const DefaultIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const destinations = [
  { name: "Cananéia", lat: -25.020, lng: -47.940, link: "/destinos/cananeia" },
  { name: "Ilha Comprida", lat: -24.7411, lng: -47.5522, link: "/destinos/ilha-comprida" },
  { name: "Registro-SP", lat: -24.500, lng: -47.840, link: "/destinos/registro-sp" },
  { name: "Iguape", lat: -24.70806, lng: -47.55528, link: "/destinos/iguape" },
];

const MapaLeaflet: React.FC = () => (
  <MapContainer
    center={[-24.7, -47.7]} 
    zoom={9}
    scrollWheelZoom={true}
    style={{ width: "100%", height: "100%" }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    />
    {destinations.map((dest) => (
      <Marker key={dest.name} position={[dest.lat, dest.lng]}>
        <Popup>
          <a href={dest.link} className="text-blue-600 hover:underline">
            {dest.name}
          </a>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default MapaLeaflet;
