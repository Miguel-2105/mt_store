import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dto/users.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
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
}
