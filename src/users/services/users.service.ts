import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dto/users.dto';
import { User } from 'src/users/entities/user.entity';
import { Order } from '../entities/order.entity';
import { ProductsService } from '../../products/services/products.service';

@Injectable()
export class UsersService {
  constructor(private productsService: ProductsService) {}
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'Miguel',
      dni: 1234567,
      birthday: '02-06-1995',
    },
  ];

  finAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`user con id ${id} no encontrado`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newUser: User = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const userIndex = this.users.findIndex((item) => item.id === id);
    console.log(userIndex);
    if (userIndex === -1) {
      throw new NotFoundException(`user con id ${id} no existe`);
    }
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...payload,
    };
    return true;
  }

  findOrdersByUser(id: number): Order {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}
