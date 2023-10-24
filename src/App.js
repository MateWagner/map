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
const MAP_STYLE = process.env.REACT_APP_MAP_STYLE;

function App() {
  const [coordinatesList, setCoordinatesList] = useState([]);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: VESZPREM_LAT,
    longitude: VESZPREM_LONG,
    zoom: 11,
  });

  const setRoute = (coordinates) => {
    setRouteCoordinates(coordinates);
  };

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
        <RouteLabel coordinatesList={coordinatesList} setRoute={setRoute} />
      )}
      <ReactMapGL
        id="map-component"
        mapboxAccessToken={API_TOKEN}
        initialViewState={viewport}
        mapStyle={MAP_STYLE}
        style={{ width: "100vw", height: "100vh" }}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        onDblClick={addMarkers}
      >
        <RouteLayer routeCoordinates={routeCoordinates} />
        <Markers coordinatesList={coordinatesList} />
      </ReactMapGL>
    </div>
  );
}

export default App;
