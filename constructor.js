var Taxi = /** @class */ (function () {
    //..
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi x: ".concat(this.location.x, " Y: ").concat(this.location.y, " konumundan X: ").concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 }, "Black");
taxi_1.travelTo({ x: 4, y: 5 });
