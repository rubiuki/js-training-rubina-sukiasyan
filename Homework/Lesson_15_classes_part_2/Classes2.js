/*
Homework: Create a `Car` Class with Inheritance, Encapsulation, and Polymorphism in JavaScript

🚀 **Objective**:
Create a `Car` superclass and two subclasses: `ElectricCar` and `GasCar` with inheritance, encapsulation, and polymorphism.

---

### **Super Class: `Car`**

✅ **Properties**:
- `make` (String): Must be a non-empty string. Capitalize first letter.
- `model` (String): Must be a non-empty string. Capitalize first letter.
- `year` (Number): Must be >= 1886. Defaults to 2025 if not provided.

✅ **Methods**:
- **Setters** and **Getters** for `make`, `model`, and `year`.
- **Private Method** `#checkServiceStatus()`: Logs `"Service status: OK"`.
- **Static Method** `vehicleType()`: Returns `"Car"`.
- **`displayDetails()`**: Returns `"This is a car model [model] of the year [year]."`

---

### **Child Class: `ElectricCar`**

✅ **Properties**:
- `batteryCapacity` (Number): Indicates the battery capacity in kWh (default: `50`).
- `electricRange` (Number): Indicates the maximum driving range on a single charge in kilometers (default: `350`).
- `chargingTime` (Number): Time in hours to fully charge the car (default: `8`).

✅ **Methods**:
- **Constructor**: Call `super(make, model, year)` and initialize `batteryCapacity`, `electricRange`, and `chargingTime`.
- **Setter and Getter** for `batteryCapacity`, `electricRange`, and `chargingTime`.
- **`chargeBattery()`**: Logs `"Charging the battery..."`.
- **`displayDetails()`**: Override to return `"This is an Electric Car model [model] of the year [year], with a [batteryCapacity] kWh battery, [electricRange] km range, and charging time of [chargingTime] hours."`
- **Static Method** `isEcoFriendly()`: Returns `true`.

---

### **Child Class: `GasCar`**

✅ **Properties**:
- `fuelCapacity` (Number): Indicates the fuel tank capacity in liters (default: `50`).
- `fuelEfficiency` (Number): Indicates the fuel efficiency in kilometers per liter (default: `15`).
- `emissions` (Number): CO2 emissions in grams per kilometer (default: `120`).

✅ **Methods**:
- **Constructor**: Call `super(make, model, year)` and initialize `fuelCapacity`, `fuelEfficiency`, and `emissions`.
- **Setter and Getter** for `fuelCapacity`, `fuelEfficiency`, and `emissions`.
- **`refuel()`**: Logs `"Refueling the car..."`.
- **`displayDetails()`**: Override to return `"This is a Gas Car model [model] of the year [year], with a [fuelCapacity]L fuel tank, [fuelEfficiency] km/L efficiency, and [emissions] g/km CO2 emissions."`
- **Static Method** `isEcoFriendly()`: Returns `false`.

---

### **Requirements**:
- Use **inheritance** (`super()`).
- Implement **encapsulation** (private properties, setters, getters).
- Apply **polymorphism** (override `displayDetails()`).
- Implement **static methods**.

---
*/
import {Validations} from "../../Validations.js";

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year ?? 2025;
    }

    set make(make) {
        this._make = Validations.validateString(make);
    }

    set model(model) {
        this._model = Validations.validateString(model);
    }

    set year(year) {
        let carYear = Validations.validateNumber(year)
        if (carYear < 1886) {
            throw new Error("The year must be 1886 or later — that's when the first car was invented!");
        }
        this._year = carYear;
    }

    get make() {
        return this._make;
    }

    get model() {
        return this._model;
    }

    get year() {
        return this._year;
    }

    // eslint-disable-next-line no-unused-private-class-members
    #checkServiceStatus() {
        console.log("Check Service Status: OK");
    }

    static vehicleType() {
        return "Car";
    }

    displayDetails() {
        return `This is a car ${this.make} which model is ${this.model} of the year ${this.year}.`
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity, electricRange, chargingTime) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity ?? 50;
        this.electricRange = electricRange ?? 350;
        this.chargingTime = chargingTime ?? 8;
    }

    set batteryCapacity(batteryCapacity) {
        this._batteryCapacity = Validations.validateNumber(batteryCapacity);
    }

    set electricRange(electricRange) {
        this._electricRange = Validations.validateNumber(electricRange);
    }

    set chargingTime(chargingTime) {
        this._chargingTime = Validations.validateNumber(chargingTime);
    }

    get batteryCapacity() {
        return this._batteryCapacity;
    }

    get electricRange() {
        return this._electricRange;
    }

    get chargingTime() {
        return this._chargingTime;
    }

    chargeBattery() {
        console.log("Charging the battery...")
    }

    displayDetails() {
        return `This is an Electric Car model ${this.model} of the year ${this.year}, with a ${this.batteryCapacity} kWh battery, ${this.electricRange} km range, and charging time of ${this.chargingTime} hours.`
    }

    static isEcoFriendly() {
        return true;
    }

}

class GasCar extends Car {
    constructor(make, model, year, fuelCapacity, fuelEfficiency, emissions) {
        super(make, model, year);
        this.fuelCapacity = fuelCapacity ?? 50;
        this.fuelEfficiency = fuelEfficiency ?? 15;
        this.emissions = emissions ?? 120;
    }

    set fuelCapacity(fuelCapacity) {
        this._fuelCapacity = Validations.validateNumber(fuelCapacity);
    }

    set fuelEfficiency(fuelEfficiency) {
        this._fuelEfficiency = Validations.validateNumber(fuelEfficiency);
    }

    set emissions(emissions) {
        this._emissions = Validations.validateNumber(emissions);
    }

    get fuelCapacity() {
        return this._fuelCapacity;
    }

    get fuelEfficiency() {
        return this._fuelEfficiency;
    }

    get emissions() {
        return this._emissions;
    }

    refuel() {
        console.log("Refueling the car...")
    }

    displayDetails() {
        return `This is a Gas Car model ${this.model} of the year ${this.year}, with ${this.fuelCapacity}L fuel tank, ${this.fuelEfficiency} km/L efficiency, and ${this.emissions} g/km CO2 emissions.`
    }

    static isEcoFriendly() {
        return false;
    }
}

const car = new Car("BMW", "500")
console.log(car.displayDetails());

// Example
const myElectricCar = new ElectricCar("tesla", "model s", 2023);
console.log(myElectricCar.displayDetails()); // This is an Electric Car model Model S of the year 2023, with a 50 kWh battery, 350 km range, and charging time of 8 hours.

const myGasCar = new GasCar("toyota", "corolla", 2022);
console.log(myGasCar.displayDetails()); // This is a Gas Car model Corolla of the year 2022, with a 50L fuel tank, 15 km/L efficiency, and 120 g/km CO2 emissions.