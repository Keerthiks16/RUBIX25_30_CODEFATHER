import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issue in Leaflet + React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

// Locations with detailed information
// const locations = [
//   {
//     id: 1,
//     name: "Bandra",
//     lat: 19.055,
//     lng: 72.829,
//     price: "₹50,000/sq ft",
//     livingCost: "₹1,20,000/month",
//     expenses: "₹25,000/month",
//     airportDistance: "6 km (CSM International Airport)",
//   },
//   {
//     id: 2,
//     name: "Andheri",
//     lat: 19.1197,
//     lng: 72.8465,
//     price: "₹35,000/sq ft",
//     livingCost: "₹80,000/month",
//     expenses: "₹20,000/month",
//     airportDistance: "5 km (CSM International Airport)",
//   },
//   {
//     id: 3,
//     name: "Dadar",
//     lat: 19.0208,
//     lng: 72.8426,
//     price: "₹45,000/sq ft",
//     livingCost: "₹1,00,000/month",
//     expenses: "₹22,000/month",
//     airportDistance: "12 km (CSM International Airport)",
//   },
//   {
//     id: 4,
//     name: "Thane",
//     lat: 19.2183,
//     lng: 72.9781,
//     price: "₹25,000/sq ft",
//     livingCost: "₹60,000/month",
//     expenses: "₹18,000/month",
//     airportDistance: "22 km (CSM International Airport)",
//   },
//   {
//     id: 5,
//     name: "Navi Mumbai",
//     lat: 19.033,
//     lng: 73.0297,
//     price: "₹20,000/sq ft",
//     livingCost: "₹50,000/month",
//     expenses: "₹15,000/month",
//     airportDistance:
//       "30 km (CSM International Airport) / 12 km (Upcoming Navi Mumbai Airport)",
//   },
//   {
//     id: 6,
//     name: "Vashi",
//     lat: 19.0771,
//     lng: 72.9981,
//     price: "₹22,000/sq ft",
//     livingCost: "₹55,000/month",
//     expenses: "₹17,000/month",
//     airportDistance: "25 km (CSM International Airport)",
//   },
//   {
//     id: 7,
//     name: "Powai",
//     lat: 19.1205,
//     lng: 72.9056,
//     price: "₹30,000/sq ft",
//     livingCost: "₹70,000/month",
//     expenses: "₹19,000/month",
//     airportDistance: "8 km (CSM International Airport)",
//   },
//   {
//     id: 8,
//     name: "Borivali",
//     lat: 19.2288,
//     lng: 72.8544,
//     price: "₹28,000/sq ft",
//     livingCost: "₹65,000/month",
//     expenses: "₹18,000/month",
//     airportDistance: "15 km (CSM International Airport)",
//   },
// ];
const locations = [
  {
    id: 1,
    name: "Bandra",
    lat: 19.055,
    lng: 72.829,
    price: "₹50,000/sq ft",
    livingCost: "₹1,20,000/month",
    expenses: "₹25,000/month",
    airportDistance: "6 km (CSM International Airport)",
  },
  {
    id: 2,
    name: "Andheri",
    lat: 19.1197,
    lng: 72.8465,
    price: "₹35,000/sq ft",
    livingCost: "₹80,000/month",
    expenses: "₹20,000/month",
    airportDistance: "5 km (CSM International Airport)",
  },
  {
    id: 3,
    name: "Dadar",
    lat: 19.0208,
    lng: 72.8426,
    price: "₹45,000/sq ft",
    livingCost: "₹1,00,000/month",
    expenses: "₹22,000/month",
    airportDistance: "12 km (CSM International Airport)",
  },
  {
    id: 4,
    name: "Thane",
    lat: 19.2183,
    lng: 72.9781,
    price: "₹25,000/sq ft",
    livingCost: "₹60,000/month",
    expenses: "₹18,000/month",
    airportDistance: "22 km (CSM International Airport)",
  },
  {
    id: 5,
    name: "Navi Mumbai",
    lat: 19.033,
    lng: 73.0297,
    price: "₹20,000/sq ft",
    livingCost: "₹50,000/month",
    expenses: "₹15,000/month",
    airportDistance:
      "30 km (CSM International Airport) / 12 km (Upcoming Navi Mumbai Airport)",
  },
  {
    id: 6,
    name: "Vashi",
    lat: 19.0771,
    lng: 72.9981,
    price: "₹22,000/sq ft",
    livingCost: "₹55,000/month",
    expenses: "₹17,000/month",
    airportDistance: "25 km (CSM International Airport)",
  },
  {
    id: 7,
    name: "Powai",
    lat: 19.1205,
    lng: 72.9056,
    price: "₹30,000/sq ft",
    livingCost: "₹70,000/month",
    expenses: "₹19,000/month",
    airportDistance: "8 km (CSM International Airport)",
  },
  {
    id: 8,
    name: "Borivali",
    lat: 19.2288,
    lng: 72.8544,
    price: "₹28,000/sq ft",
    livingCost: "₹65,000/month",
    expenses: "₹18,000/month",
    airportDistance: "15 km (CSM International Airport)",
  },
  {
    id: 9,
    name: "Malad",
    lat: 19.1773,
    lng: 72.8344,
    price: "₹25,000/sq ft",
    livingCost: "₹60,000/month",
    expenses: "₹17,000/month",
    airportDistance: "18 km (CSM International Airport)",
  },
  {
    id: 10,
    name: "Kandivali",
    lat: 19.2056,
    lng: 72.8444,
    price: "₹27,000/sq ft",
    livingCost: "₹62,000/month",
    expenses: "₹19,000/month",
    airportDistance: "16 km (CSM International Airport)",
  },
  {
    id: 11,
    name: "Ghatkopar",
    lat: 19.0733,
    lng: 72.9044,
    price: "₹32,000/sq ft",
    livingCost: "₹75,000/month",
    expenses: "₹20,000/month",
    airportDistance: "10 km (CSM International Airport)",
  },
  {
    id: 12,
    name: "Mulund",
    lat: 19.1778,
    lng: 72.9417,
    price: "₹28,000/sq ft",
    livingCost: "₹63,000/month",
    expenses: "₹18,000/month",
    airportDistance: "20 km (CSM International Airport)",
  },
  {
    id: 13,
    name: "Kalyan",
    lat: 19.2417,
    lng: 73.1275,
    price: "₹18,000/sq ft",
    livingCost: "₹45,000/month",
    expenses: "₹12,000/month",
    airportDistance: "40 km (CSM International Airport)",
  },
  {
    id: 14,
    name: "Mira Road",
    lat: 19.2878,
    lng: 72.8517,
    price: "₹20,000/sq ft",
    livingCost: "₹50,000/month",
    expenses: "₹15,000/month",
    airportDistance: "30 km (CSM International Airport)",
  },
  {
    id: 15,
    name: "Panvel",
    lat: 18.9902,
    lng: 73.1224,
    price: "₹16,000/sq ft",
    livingCost: "₹40,000/month",
    expenses: "₹10,000/month",
    airportDistance:
      "35 km (CSM International Airport) / 15 km (Upcoming Navi Mumbai Airport)",
  },
];

const MumbaiMap = () => {
  return (
    <div className="w-[80%] mx-auto h-[500px] rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <MapContainer
        center={[19.076, 72.8777]}
        zoom={11}
        className="h-full w-full"
      >
        {/* Map Tiles (OpenStreetMap) */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Markers */}
        {locations.map((place) => (
          <Marker key={place.id} position={[place.lat, place.lng]}>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-lg text-blue-700">
                  {place.name}
                </h3>
                <p className="text-gray-700">
                  🏠 Housing Price:{" "}
                  <span className="font-semibold">{place.price}</span>
                </p>
                <p className="text-gray-700">
                  💰 Cost of Living:{" "}
                  <span className="font-semibold">{place.livingCost}</span>
                </p>
                <p className="text-gray-700">
                  🛒 Avg. Monthly Expenses:{" "}
                  <span className="font-semibold">{place.expenses}</span>
                </p>
                <p className="text-gray-700">
                  ✈️ Nearest Airport:{" "}
                  <span className="font-semibold">{place.airportDistance}</span>
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MumbaiMap;
