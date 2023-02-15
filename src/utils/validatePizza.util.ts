import { z } from "zod";

export const validatePizza = (choice: pizzaSchema): boolean => {
  try {
    pizzaSchema.parse(choice);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error.issues);
    }
    return false;
  }
};

const pizzaSchema = z.object({
  choice: z.enum(["normal", "calzone", "wholeWheat", "Normal", "Calzone", "WholeWheat"]),
});

export type pizzaSchema = z.infer<typeof pizzaSchema>;
