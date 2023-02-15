import { Customer } from "./classes/customer.class";

const customer = new Customer();

customer.chooseToppings({ tomatoSauce: "yes", cheese: "yes", mozzarella: "yes", onion: "no", tuna: "no" });
customer.choosePizza({ choice: "Normal" });
customer.calculatePrice();
console.log(customer);
//Prints out:
/**
 * Customer {
  pizza: 'Normal',
  toppings: [ 'TomatoSauce', 'Cheese', 'Mozzarella' ],
  priceForToppings: 4,
  priceForPizza: 6,
  totalPrice: 10
}
 */


const customer2 = new Customer();
customer2.chooseToppings({ tomatoSauce: "yes", cheese: "yes", mozzarella: "yes", onion: "yes", tuna: "yes" });
customer2.choosePizza({ choice: "Calzone" });
customer2.calculatePrice();
console.log(customer2);

//Prints out: 
/**
 * Customer {
  pizza: 'Calzone',
  toppings: [ 'TomatoSauce', 'Cheese', 'Onion', 'Mozzarella', 'Tuna' ],
  priceForToppings: 8,
  priceForPizza: 7.5,
  totalPrice: 15.5
}
 */

