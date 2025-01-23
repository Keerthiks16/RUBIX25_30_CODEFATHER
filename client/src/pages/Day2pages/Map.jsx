import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const [locationData, setLocationData] = useState([
    {
      id: 1,
      name: "Bandra",
      position: [19.076, 72.8777],
      avgHousePrice: 8500000,
      costOfLiving: 65000,
    },
    {
      id: 2,
      name: "Andheri",
      position: [19.1173, 72.8648],
      avgHousePrice: 6800000,
      costOfLiving: 55000,
    },
    {
      id: 3,
      name: "Powai",
      position: [19.1179, 72.9043],
      avgHousePrice: 7200000,
      costOfLiving: 60000,
    },
  ]);

  return (
    <MapContainer
      center={[19.076, 72.8777]}
      zoom={12}
      style={{ height: "80vh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {locationData.map((location) => (
        <Marker key={location.id} position={location.position}>
          <Popup>
            <h3>{location.name}</h3>
            <p>
              Average House Price: ₹{location.avgHousePrice.toLocaleString()}
            </p>
            <p>
              Cost of Living: ₹{location.costOfLiving.toLocaleString()}/month
            </p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
