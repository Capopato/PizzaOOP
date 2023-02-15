import { z } from "zod";

export const validateToppings = (schema: toppingSchema): boolean => {
  try {
    toppingSchema.parse(schema);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error.issues);
    }
    return false;
  }
};

const toppingSchema = z.object({
  tomatoSauce: z.string().optional(),
  cheese: z.string().optional(),
  onion: z.string().optional(),
  mozzarella: z.string().optional(),
  tuna: z.string().optional(),
});

export type toppingSchema = z.infer<typeof toppingSchema>;
