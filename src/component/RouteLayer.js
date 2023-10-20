import { Source, Layer } from "react-map-gl";

const RouteLayer = ({ routeCoordinates }) => {
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "feature",
        geometry: {
          type: "LineString",
          coordinates: routeCoordinates,
        },
      },
    ],
  };

  const lineStyle = {
    id: "roadLayer",
    type: "line",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "blue",
      "line-width": 5,
      "line-opacity": 0.75,
    },
  };

  return (
    <Source id="routeSource" type="geojson" data={geojson}>
      <Layer {...lineStyle} />
    </Source>
  );
};

export default RouteLayer;
