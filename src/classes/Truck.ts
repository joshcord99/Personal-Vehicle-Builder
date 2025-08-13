// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from "./Vehicle.js";
import Motorbike from "./Motorbike.js";
import Car from "./Car.js";
import Wheel from "./Wheel.js";
import AbleToTow from "../interfaces/AbleToTow.js";
import { WHEEL_COUNTS } from "../constants/vehicleConstants.js";

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    if (wheels.length !== WHEEL_COUNTS.TRUCK) {
      this.wheels = Array(WHEEL_COUNTS.TRUCK)
        .fill(null)
        .map(() => new Wheel());
    } else {
      this.wheels = wheels;
    }
  }
  tow(vehicle: Car | Motorbike | Truck): void {
    if (
      vehicle instanceof Motorbike ||
      vehicle instanceof Car ||
      vehicle instanceof Truck
    ) {
      if (vehicle.weight <= this.towingCapacity) {
        console.log(
          `${vehicle.make} ${vehicle.model} is currently being towed`
        );
      } else {
        console.log(
          `Sorry, ${vehicle.make} ${vehicle.model} is too heavy to be towed`
        );
      }
    }
  }
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
    console.log(`towingCapacity: ${this.towingCapacity}`);
  }
}
// Export the Truck class as the default export
export default Truck;
