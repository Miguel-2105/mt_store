import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'papitas',
      description: 'lays',
      price: 99,
      image: '',
      stock: 3,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id = this.counterId,
      ...payload,
    }
    this.products.push(newProduct);
    return newProduct;
  }
}
