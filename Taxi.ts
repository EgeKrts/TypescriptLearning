import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

export class Taxi implements Vehicle {
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
