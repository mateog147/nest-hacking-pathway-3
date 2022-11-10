import { Injectable } from '@nestjs/common';
import { CustomerDto } from '../models/customer.dto';
import { v4 as uuid } from 'uuid';
import { PatchCustomerDto } from '../models/patch-customer.dto';

@Injectable()
export class CustomerService {
  private customers: CustomerDto[] = [];
  constructor() {
    this.customers.push({
      uuid: uuid(),
      name: 'customerOne',
      email: 'customer1@mail.com',
      nit: '900123456',
    });
    this.customers.push({
      uuid: uuid(),
      name: 'customerTwo',
      email: 'customer2@mail.com',
      nit: '901987654',
    });
  }

  getAll(): CustomerDto[] {
    return this.customers;
  }

  getById(id: string): CustomerDto | undefined {
    return this.customers.find((customer) => customer.uuid == id);
  }

  create(data: CustomerDto): CustomerDto {
    this.customers.push({
      uuid: uuid(),
      name: data.name,
      email: data.email,
      nit: data.nit,
    });
    return this.customers[this.customers.length - 1];
  }

  update(id: string, customerDto: CustomerDto): CustomerDto {
    const oldcustomer: CustomerDto | undefined = this.customers.find(
      (customer) => customer.uuid == id,
    );
    if (oldcustomer) {
      oldcustomer.name = customerDto.name;
      oldcustomer.nit = customerDto.nit;
      oldcustomer.email = customerDto.email;
      return oldcustomer;
    }
    return this.create(customerDto);
  }

  remove(uuid: string): boolean {
    const oldcustomer: CustomerDto | undefined = this.customers.find(
      (customer) => customer.uuid == uuid,
    );
    if (oldcustomer) {
      const index = this.customers.indexOf(oldcustomer);
      this.customers.splice(index, 1);
      return true;
    }
    return false;
  }

  patch(uuid: string, customerDto: PatchCustomerDto): CustomerDto | undefined {
    const oldcustomer = this.customers.find(
      (customer) => customer.uuid == uuid,
    );
    if (oldcustomer) {
      const index = this.customers.indexOf(oldcustomer);
      const updatedcustomer = {
        ...oldcustomer,
        ...customerDto,
      };
      this.customers[index] = updatedcustomer;
      return updatedcustomer;
    }
    return undefined;
  }
}
