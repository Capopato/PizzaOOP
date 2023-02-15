import { toppingModel } from "../models/toppings.model";

export class Toppings implements toppingModel {
  tomatoSauce: string;
  cheese: string;
  onion: string;
  mozzarella: string;
  tuna: string;
  constructor() {
    (this.tomatoSauce = "TomatoSauce"), (this.cheese = "Cheese"), (this.onion = "Onion"), (this.mozzarella = "Mozzarella"), (this.tuna = "Tuna");
  }
}
