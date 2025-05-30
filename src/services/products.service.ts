import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dto/products.dto';
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
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newProduct: Product = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    let currentIdx = -1;
    //const currentProduct: Product = this.products.find((item) => item.id === id);
    currentIdx = this.products.findIndex((item) => item.id === id);
    console.log('update');
    console.log(currentIdx);
    console.log(id);
    console.log(typeof id);
    if (currentIdx === -1) {
      return null;
    }
    this.products[currentIdx] = {
      ...this.products[currentIdx],
      ...payload,
    };
    return this.products[currentIdx];
  }

  delete(id: number) {
    const productIdx = this.products.findIndex((item) => item.id === id);
    if (productIdx === -1) {
      return new NotFoundException(`Product #${id} not found`);
    }
    console.log(productIdx);
    this.products.splice(productIdx, 1);
    return true;
  }
}
