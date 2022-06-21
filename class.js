var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi x: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Otob\u00FCs x: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Bus;
}());
