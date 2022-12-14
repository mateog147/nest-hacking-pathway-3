import {
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsUUID,
} from 'class-validator';
import { Customer } from '../interfaces/customer';

export class CustomerDto implements Customer {
  @IsUUID()
  @IsNotEmpty()
  uuid: string;
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
