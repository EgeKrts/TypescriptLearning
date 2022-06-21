interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  //..

  constructor(private location: Point, private color?: string) {}

  travelTo(point: Point): void {
    console.log(
      `Taksi x: ${this.location.x} Y: ${this.location.y} konumundan X: ${point.x} Y: ${point.y} konumuna gidiyor`
    );
  }

  get Location() {
    return this.location;
  }

  set Location(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("Koordinat bilgileri negatif olamaz");
    }
    this.location = value;
  }
}

let taxi_1 = new Taxi({ x: 2, y: 5 }, "Black");

taxi_1.travelTo({ x: 4, y: 5 });

let currentLocation = taxi_1.Location;

taxi_1.Location = { x: 4, y: 5 };
