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
}

let taxi_1 = new Taxi({ x: 2, y: 5 }, "Black");

taxi_1.travelTo({ x: 4, y: 5 });
