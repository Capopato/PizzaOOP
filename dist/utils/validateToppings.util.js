"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToppings = void 0;
const zod_1 = require("zod");
const validateToppings = (schema) => {
    try {
        toppingSchema.parse(schema);
        return true;
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            console.log(error.issues);
        }
        return false;
    }
};
exports.validateToppings = validateToppings;
const toppingSchema = zod_1.z.object({
    tomatoSauce: zod_1.z.string().optional(),
    cheese: zod_1.z.string().optional(),
    onion: zod_1.z.string().optional(),
    mozzarella: zod_1.z.string().optional(),
    tuna: zod_1.z.string().optional(),
});
