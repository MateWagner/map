import { Marker } from "react-map-gl";
const Markers = ({ coordinatesList }) => {
  const LINE_COLOR = "red";
  return (
    <>
      {coordinatesList.map((coordinates, index) => (
        <Marker key={index} {...coordinates} color={LINE_COLOR} />
      ))}
    </>
  );
};
export default Markers;
