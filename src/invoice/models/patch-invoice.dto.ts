import { Type } from 'class-transformer';
import {
  IsAlphanumeric,
  IsOptional,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Invoice } from '../interfaces/invoice';
import { InvoiceDetailDto } from './invoice-detail.dto';
export class PatchInvoiceDto implements Partial<Invoice> {
  @IsOptional()
  @IsUUID()
  uuid?: string;
  @IsOptional()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  detail?: InvoiceDetailDto;
  @IsOptional()
  @IsAlphanumeric()
  userUuid?: string;
}
