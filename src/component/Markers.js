import { Marker } from "react-map-gl";
const Markers = ({ coordinatesList }) => {
  return (
    <>
      {coordinatesList.map((coordinates, index) => (
        <Marker key={index} {...coordinates} color="red" />
      ))}
    </>
  );
};
export default Markers;
