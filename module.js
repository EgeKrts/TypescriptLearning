"use strict";
exports.__esModule = true;
var Taxi_1 = require("./Taxi");
var taxi_1 = new Taxi_1.Taxi({ x: 2, y: 5 }, "Black");
taxi_1.travelTo({ x: 4, y: 5 });
var currentLocation = taxi_1.Location;
taxi_1.Location = { x: 4, y: 5 };
