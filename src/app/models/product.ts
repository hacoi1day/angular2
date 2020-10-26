export class Product {
  id: number;
  name: string;
  price: number;
  status: boolean;

  constructor(name: string, price: number, status: boolean) {
    this.name = name;
    this.price = price;
    this.status = status;
  }

}
