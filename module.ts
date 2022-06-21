import { Taxi } from "./Taxi";

let taxi_1 = new Taxi({ x: 2, y: 5 }, "Black");

taxi_1.travelTo({ x: 4, y: 5 });

let currentLocation = taxi_1.Location;

taxi_1.Location = { x: 4, y: 5 };
