"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_class_1 = require("./classes/customer.class");
const customer = new customer_class_1.Customer();
customer.chooseToppings({ tomatoSauce: "yes", cheese: "yes", mozzarella: "yes", onion: "no", tuna: "no" });
customer.choosePizza({ choice: "Normal" });
customer.calculatePrice();
console.log(customer);
const customer2 = new customer_class_1.Customer();
customer2.chooseToppings({ tomatoSauce: "yes", cheese: "yes", mozzarella: "yes", onion: "yes", tuna: "yes" });
customer2.choosePizza({ choice: "Calzone" });
customer2.calculatePrice();
console.log(customer2);
