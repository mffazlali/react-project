import { OrderModel } from "../models";
import { faker } from "@faker-js/faker/locale/fa";

export class OrderService {

  getAll = () => {
    const order: OrderModel[] = [];
    for (let i = 1; i <= 20; i++) {
      order.push({ number: faker.random.words(8), name: faker.commerce.productName(), image: faker.image.imageUrl(200,200,'commerce') });
    }
    return order;
  };
}
