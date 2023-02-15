"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const validatePizza_util_1 = require("../utils/validatePizza.util");
const validateToppings_util_1 = require("../utils/validateToppings.util");
const toppings_class_1 = require("./toppings.class");
const pizza_class_1 = require("./pizza.class");
class Customer {
    constructor() {
        (this.pizza = ""), (this.toppings = []), (this.priceForToppings = 0), (this.priceForPizza = 0), (this.totalPrice = 0);
    }
    chooseToppings(choice) {
        const topping = new toppings_class_1.Toppings();
        const valid = (0, validateToppings_util_1.validateToppings)(choice);
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
    choosePizza(choice) {
        const pizza = new pizza_class_1.Pizza();
        const valid = (0, validatePizza_util_1.validatePizza)(choice);
        if (!valid) {
            return;
        }
        if (choice.choice == "normal" || choice.choice == "Normal") {
            pizza.normal == "normal";
            this.pizza = "Normal";
            this.priceForPizza += 6;
        }
        else if (choice.choice == "calzone" || choice.choice == "Calzone") {
            this.pizza = "Calzone";
            this.priceForPizza += 7.5;
            pizza.calzone == "calzone";
        }
        else if (choice.choice == "wholeWheat" || choice.choice == "WholeWheat") {
            this.pizza = "WholeWheat";
            pizza.wholeWheat == "wholeWheat";
            this.priceForPizza += 6.5;
        }
    }
    calculatePrice() {
        this.totalPrice = this.priceForToppings + this.priceForPizza;
    }
}
exports.Customer = Customer;
