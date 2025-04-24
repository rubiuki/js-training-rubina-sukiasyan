export class Validations {
    static validateString(input) {
        if (typeof input != "string") {
            throw new Error("Please enter a valid text. This field cannot be empty!");
        }
        return input[0].toUpperCase() + input.substring(1).toLowerCase();
    }

    static validateNumber(input) {
        if (typeof input != "number" || isNaN(input)) {
            throw new Error("Please enter a valid number.");
        }
        return input;
    }
}

