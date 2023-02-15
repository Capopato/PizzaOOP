import { pizzaModel } from "../models/pizza.model";

export class Pizza implements pizzaModel {
  normal: string;
  calzone: string;
  wholeWheat: string;
  constructor() {
    (this.normal = ""), (this.calzone = ""), (this.wholeWheat = "");
  }
}
