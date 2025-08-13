export function isValidYear(year: number): boolean {
  const currentYear = new Date().getFullYear();
  return year >= 1900 && year <= currentYear + 1;
}

export function isValidWeight(weight: number): boolean {
  return weight > 0 && weight <= 100000;
}

export function isValidSpeed(speed: number): boolean {
  return speed >= 0 && speed <= 500;
}

export function isValidTowingCapacity(capacity: number): boolean {
  return capacity >= 0 && capacity <= 50000;
}
