import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dto/customer.dto';

@Injectable()
export class CustomersService {
  private idCounter: number = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'miki',
      lastName: 'tp',
      phone: '123',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer con ${id} no existe`);
    }
    return customer;
  }

  create(payload: CreateCustomerDto) {
    this.idCounter = this.idCounter + 1;
    const newCustomer = {
      id: this.idCounter,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    const customerInd = this.customers.findIndex((item) => item.id === id);
    const updatedCustomer = {
      ...customer,
      ...payload,
    };
    this.customers[customerInd] = updatedCustomer;
    return updatedCustomer;
  }

  remove(id: number) {
    const customerInd = this.customers.findIndex((item) => item.id === id);
    if (customerInd === -1) {
      throw new NotFoundException(`Customer con ${id} no existe`);
    }
    this.customers.splice(customerInd, 1);
    return true;
  }
}
