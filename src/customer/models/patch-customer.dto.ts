import {
  IsOptional,
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsUUID,
} from 'class-validator';

export class PatchCustomerDto {
  @IsOptional()
  @IsUUID()
  uuid?: string;
  @IsOptional()
  @IsAlpha()
  name?: string;
  @IsOptional()
  @IsEmail()
  email?: string;
  @IsAlphanumeric()
  @IsOptional()
  nit?: string;
}
