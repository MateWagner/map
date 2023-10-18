import * as React from "react";
import Map from "react-map-gl";

const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const VESZPREM_LAT = Number(process.env.REACT_APP_VESZPREM_LAT);
const VESZPREM_LONG = Number(process.env.REACT_APP_VESZPREM_LONG);

console.log(API_TOKEN);

function App() {
  return (
    <Map
      mapboxAccessToken={API_TOKEN}
      initialViewState={{
        longitude: VESZPREM_LONG,
        latitude: VESZPREM_LAT,
        zoom: 11,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default App;
