import { useState } from "react";

const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const RouteLabel = ({ coordinatesList, setRoute }) => {
  const [tripData, setTripData] = useState();

  const options = {
    waypoints_per_route: true,
    geometries: "geojson",
    steps: true,
    access_token: API_TOKEN,
  };

  const getCoordinatesStringForUrl = () =>
    coordinatesList
      .reduce((acc, val) => {
        acc.push(`${val.longitude},${val.latitude}`);
        return acc;
      }, [])
      .join(";");

  const getOptionsString = () =>
    Object.keys(options)
      .reduce((acc, val) => {
        acc.push(`${val}=${options[val]}`);
        return acc;
      }, [])
      .join("&");

  const onClick = async () => {
    const coordinatesString = getCoordinatesStringForUrl();
    const optionsString = getOptionsString();

    const url = `${BASE_URL}${coordinatesString}?${optionsString}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const tripDataTemplate = {
      distance: data.routes[0].distance,
      duration: data.routes[0].duration,
    };
    const coordinates = data.routes[0].geometry.coordinates;
    setRoute(coordinates);
    setTripData(tripDataTemplate);
  };

  return (
    <div id="route-label">
      <h2>Route points:</h2>
      {coordinatesList.map((coordinates, index) => (
        <div key={index}>
          Marker {index + 1}
          <p>{`Longitude: ${coordinates.longitude}
        Latitude: ${coordinates.latitude}`}</p>
        </div>
      ))}

      {coordinatesList.length >= 2 && (
        <button onClick={() => onClick()}>Plan Route</button>
      )}

      {tripData != null && <TripDataDisplay tripData={tripData} />}
    </div>
  );
};

const TripDataDisplay = ({ tripData }) => {
  const distance =
    tripData.distance > 1000
      ? `${(tripData.distance / 1000).toFixed(2)} Km`
      : `${tripData.distance.toFixed(2)} M`;

  const time =
    tripData.duration > 60 * 60
      ? `${(tripData.duration / (60 * 60)).toFixed(2)} H`
      : `${Math.round(tripData.duration / 60)} Min`;

  return (
    <p>
      Distance: {distance} Time: {time}
    </p>
  );
};

export default RouteLabel;
