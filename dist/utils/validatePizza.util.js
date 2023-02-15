"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePizza = void 0;
const zod_1 = require("zod");
const validatePizza = (choice) => {
    try {
        pizzaSchema.parse(choice);
        return true;
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            console.log(error.issues);
        }
        return false;
    }
};
exports.validatePizza = validatePizza;
const pizzaSchema = zod_1.z.object({
    choice: zod_1.z.enum(["normal", "calzone", "wholeWheat", "Normal", "Calzone", "WholeWheat"]),
});
