export const VEHICLE_TYPES = {
  CAR: "Car",
  TRUCK: "Truck",
  MOTORBIKE: "Motorbike",
} as const;

export const DEFAULT_WHEEL_SPECS = {
  DIAMETER: 18,
  TIRE_BRAND: "GoodYear",
} as const;

export const WHEEL_COUNTS = {
  CAR: 4,
  TRUCK: 4,
  MOTORBIKE: 2,
} as const;
