export function isValidYear(year) {
    const currentYear = new Date().getFullYear();
    return year >= 1900 && year <= currentYear + 1;
}
export function isValidWeight(weight) {
    return weight > 0 && weight <= 100000;
}
export function isValidSpeed(speed) {
    return speed >= 0 && speed <= 500;
}
export function isValidTowingCapacity(capacity) {
    return capacity >= 0 && capacity <= 50000;
}
