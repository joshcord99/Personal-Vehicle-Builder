import { DEFAULT_WHEEL_SPECS } from "../constants/vehicleConstants.js";
// Wheel class that defines the properties of a wheel
class Wheel {
    // Constructor for the Wheel class
    constructor(diameter = DEFAULT_WHEEL_SPECS.DIAMETER, tireBrand = DEFAULT_WHEEL_SPECS.TIRE_BRAND) {
        this.diameter = diameter;
        this.tireBrand = tireBrand;
    }
    // Getter methods for the properties of the Wheel class
    get getDiameter() {
        return this.diameter;
    }
    // Setter method for the diameter property
    get getTireBrand() {
        return this.tireBrand;
    }
}
// Export the Wheel class
export default Wheel;
