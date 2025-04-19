/*
Homework: Create an `Employee` Class (No Inheritance)

🚀 Objective:
Create a JavaScript class named `Employee` that represents an employee with strict validation rules
and meaningful output using getters and methods.

✅ Properties:
Your class should have the following properties, all validated via setters:

1. name (String):
   - Must be between 2 and 15 characters.
   - Must be a string.
   - Normalized: first letter uppercase, the rest lowercase.

2. surname (String):
   - Same validation rules and normalization as name.

3. email (String):
   - Must follow the basic format: x.x@xx.
   - Should be trimmed (no leading/trailing spaces).
   - Must be converted to lowercase.

4. phoneNumber (String):
   - Must be a string.
   - Must be exactly 9 digits.
   - Must start with one of the valid Armenian mobile prefixes:
     091, 093, 094, 095, 096, 097, 098, or 099.
   - No extra characters allowed (only digits, no "+" or dashes).

5. position (String):
   - Must be between 2 and 50 characters.

6. salary (Number):
   - Must be a number.
   - Must be greater than or equal to 68,000 AMD (minimum net salary in Armenia).

7. isRemote (Boolean):
   - Must be either true or false.

All values must be assigned through their respective setters during object construction.
If any validation fails, throw an Error with a descriptive message.

📤 Getter:
Create a getter named `info` that returns a complete summary of the employee:

Example:
"Employee information: Bob Henderson is a QA Automation Engineer. He works remotely.
His salary is 670000 AMD. Phone number: 098666666.
Email: bob.henderson@email.com"

- If `isRemote` is false, the sentence should say: "He works on-site."

🔧 Methods:

1. giveRaise(amount):
   - Increases the salary by the given amount (number).
   - Validates that the input is a number.

2. raiseSalary(percent):
   - Increases the employee’s current salary by the given percent.
   - The percent input:
     - Must be a number.
     - Must be greater than 0.
   - Throws an error if input is invalid.

3. changePosition(newPosition):
   - Changes the employee’s position to the given value.
   - Validation rules:
     - Must be a string.
     - Must be between 2 and 50 characters.
   - Throws an error if the input is invalid.
*/
class Employee {
    // Your code here
    constructor(name, surname, email, phoneNumber, position, salary, isRemote) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.salary = salary;
        this.isRemote = isRemote;
    }
    set name(name) {
        if(typeof name !== "string" || name.length < 2 || name.length > 15){
            throw new Error("Name should be a string with 2 to 15 characters long!");
        }

        this._name = name[0].toUpperCase() + name.substring(1).toLowerCase();
    }

    set surname(surname) {
        if(typeof surname !== "string" || surname.length < 2 || surname.length > 15){
            throw new Error("Surname should be a string with 2 to 15 characters long!");
        }
        this._surname = surname[0].toUpperCase() + surname.substring(1).toLowerCase();
    }

    set email(email) {
        let normalized = email.trim().toLowerCase();
        if (!/^\S+@\S+\.\S+$/.test(normalized)) {
            throw new Error("Please enter a valid email address!");
        }
        this._email = normalized;
    }

    set phoneNumber(phoneNumber) {
        if(typeof phoneNumber !== "string" || !phoneNumber.match('^[0-9]{9}$')){
            throw new Error("Valid phone number should be a string with 9 characters long!");
        }

        let allowedPrefixes = ["091", "093","094", "095", "096", "097", "098", "099"]
        if(!allowedPrefixes.some(prefix => phoneNumber.startsWith(prefix))){
            throw new Error("Invalid phone number!");
        }
        this._phoneNumber = phoneNumber;
    }

    set position(position) {
        if(typeof position !== "string" || position.length < 2 || position.length > 50){
            throw new Error("Position should be 2 to 50 characters long!");
        }
        this._position = position;
    }

    set salary(salary) {
        if(typeof salary !== "number" || salary < 68000){
            throw new Error("Salary should be equal or greater than 68.000!");
        }
        this._salary = salary;
    }

    set isRemote(isRemote) {
        if(typeof isRemote !== "boolean"){
            throw new Error("IsRemote should be boolean!");
        }
        this._isRemote = isRemote;
    }

    get info(){
       return `Employee information: ${this._name} ${this._surname} is a ${this._position}. He works ${this._isRemote ? "remotely" : "on-site"}.
        His salary is ${this._salary} AMD. Phone number: ${this._phoneNumber}.
        Email: ${this._email}.`
    }

    giveRaise(amount){
        if(typeof amount !== "number"){
            throw new Error("Amount should be a number!");
        }
        return this._salary = this._salary + amount;
    }

    raiseSalary(percent){
        if(typeof percent !== "number" || percent <= 0){
            throw new Error("Percent should be a number!");
        }
        return this._salary += this._salary * (percent/100);
    }

    changePosition(newPosition){
        if(typeof newPosition !== "string" || newPosition.length < 2 || newPosition.length > 50){
            throw new Error("New Position should be 2 to 50 characters long!");
        }
        this._position = newPosition;
    }
}

// 💡 Example Usage:
const emp = new Employee(
    "bob",
    "henderson",
    "  Bob.Henderson@email.com ",
    "098666666",
    "QA Automation Engineer",
    780000,
    true
);

console.log(emp.info);
// Employee information: Bob Henderson is a QA Automation Engineer. He works remotely./He works on-site. (if isRemote = false)
// His salary is 780000 AMD. Phone number: 098666666.
// Email: bob.henderson@email.com

emp.raiseSalary(10);
emp.giveRaise(30000);
emp.changePosition("Senior QA Automation Engineer");
console.log(emp.info);
// Updated info reflecting new salary and position