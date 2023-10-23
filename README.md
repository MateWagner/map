## About the project 

The target is to make an application with Mapbox GL where you can pin three targets, show them on the map, and with the Direction API, create a route between these three targets.

## Used technologies

 - [React](https://react.dev/) 
 - [react-map-gl Library](https://github.com/visgl/react-map-gl) 
 - [dotenv Library](https://github.com/motdotla/dotenv)
 - CSS

## How to use

- Clone the project from GitHub.
- Provide your Mapbox GL API Token in the .env.example file, which is in the project root folder, and rename the file to .env
- Start the application from the terminal with `npm start`

When the application starts, it will open the page on (localhost:3000)[http://localhost:3000] if not, then you can click on the link. As the page opens in the center, you will see Veszprém City, and you can move around on the map. When you find your starting point, you can place a marker on the map by double-clicking on the target, and the first target coordinates will show up in a Route Points overlay. You need to have a minimum of two points to start planning a route, and currently, a maximum of three points is passable. After planning the route, it will show up on the map, and it will show the distance and duration of the trip on the bottom of route points overlay.
