import { toppingSchema } from "../utils/validateToppings.util";
import { pizzaSchema } from "../utils/validatePizza.util";
import { Toppings } from "../classes/toppings.class";
import { Pizza } from "../classes/pizza.class";

export interface customerModel {
  toppings: string[];
  pizza: string;
  priceForToppings: number;
  priceForPizza: number;
  chooseToppings(choice: toppingSchema): void;
  choosePizza(choice: pizzaSchema): void;
  calculatePrice(): void;
}
