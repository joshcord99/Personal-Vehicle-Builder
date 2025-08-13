export type VehicleType = "Car" | "Truck" | "Motorbike";

export interface VehicleBase {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
}

export interface WheelSpec {
  diameter: number;
  tireBrand: string;
}
