import { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./component/Markers";
import RouteLabel from "./component/RouteLabel";
import RouteLayer from "./component/RouteLayer";
import "./App.css";

const MAX_MARKER_COUNT = 3;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const VESZPREM_LAT = Number(process.env.REACT_APP_VESZPREM_LAT);
const VESZPREM_LONG = Number(process.env.REACT_APP_VESZPREM_LONG);

function App() {
  const [coordinatesList, setCoordinatesList] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: VESZPREM_LAT,
    longitude: VESZPREM_LONG,
    zoom: 11,
  });

  const addMarkers = (event) => {
    if (coordinatesList.length >= MAX_MARKER_COUNT) return;
    setCoordinatesList([
      ...coordinatesList,
      { longitude: event.lngLat.lng, latitude: event.lngLat.lat },
    ]);
  };
  return (
    <div>
      {coordinatesList.length > 0 && (
        <RouteLabel coordinatesList={coordinatesList} />
      )}
      <ReactMapGL
        mapboxAccessToken={API_TOKEN}
        initialViewState={viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{ width: "100vw", height: "100vh" }}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        onDblClick={addMarkers}
      >
        <Markers coordinatesList={coordinatesList} />
      </ReactMapGL>
    </div>
  );
}

export default App;
