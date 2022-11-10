import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Invoice } from '../interfaces/invoice';
import { InvoiceDetailDto } from './invoice-detail.dto';

export class CreateInvoiceDto implements Partial<Invoice> {
  @IsOptional()
  uuid?: string | undefined;
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  detail: InvoiceDetailDto;
  @IsUUID()
  @IsNotEmpty()
  userUuid: string;
}
