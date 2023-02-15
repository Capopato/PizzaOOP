import { customerModel } from "../models/customer.model";
import { pizzaSchema, validatePizza } from "../utils/validatePizza.util";
import { toppingSchema, validateToppings } from "../utils/validateToppings.util";
import { Toppings } from "./toppings.class";
import { Pizza } from "./pizza.class";
import { ThemeConsumer } from "styled-components";

export class Customer implements customerModel {
  pizza: string;
  toppings: string[];
  priceForToppings: number;
  priceForPizza: number;
  totalPrice: number;

  constructor() {
    (this.pizza = ""), (this.toppings = []), (this.priceForToppings = 0), (this.priceForPizza = 0), (this.totalPrice = 0);
  }

  chooseToppings(choice: toppingSchema): void {
    const topping = new Toppings();

    const valid = validateToppings(choice);

    if (!valid) {
      return;
    }
    if (choice.tomatoSauce == "yes") {
      this.toppings.push(topping.tomatoSauce);
      this.priceForToppings += 0.5;
    }
    if (choice.cheese == "yes") {
      this.toppings.push(topping.cheese);
      this.priceForToppings += 1;
    }
    if (choice.onion == "yes") {
      this.toppings.push(topping.onion);
      this.priceForToppings += 1.5;
    }
    if (choice.mozzarella == "yes") {
      this.toppings.push(topping.mozzarella);
      this.priceForToppings += 2.5;
    }
    if (choice.tuna == "yes") {
      this.toppings.push(topping.tuna);
      this.priceForToppings += 2.5;
    }
  }

  choosePizza(choice: pizzaSchema): void {
    const pizza = new Pizza();

    const valid = validatePizza(choice);
    if (!valid) {
      return;
    }

    if (choice.choice == "normal" || choice.choice == "Normal") {
      pizza.normal == "normal";
      this.pizza = "Normal";
      this.priceForPizza += 6;
    } else if (choice.choice == "calzone" || choice.choice == "Calzone") {
      this.pizza = "Calzone";
      this.priceForPizza += 7.5;
      pizza.calzone == "calzone";
    } else if (choice.choice == "wholeWheat" || choice.choice == "WholeWheat") {
      this.pizza = "WholeWheat";
      pizza.wholeWheat == "wholeWheat";
      this.priceForPizza += 6.5;
    }
  }

  calculatePrice(): void {
    this.totalPrice = this.priceForToppings + this.priceForPizza;
  }
}
