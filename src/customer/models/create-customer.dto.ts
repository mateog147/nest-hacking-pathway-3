import { IsAlpha, IsAlphanumeric, IsEmail, IsNotEmpty } from 'class-validator';
import { Customer } from '../interfaces/customer';

export class CreateCustomerDto implements Partial<Customer> {
  uuid?: string;
  @IsAlpha()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsAlphanumeric()
  @IsNotEmpty()
  nit: string;
}
