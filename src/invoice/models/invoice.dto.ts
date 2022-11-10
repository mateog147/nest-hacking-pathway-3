import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { InvoiceDetailDto } from './invoice-detail.dto';
import { Invoice } from '../interfaces/invoice';
import { Type } from 'class-transformer';
export class InvoiceDto implements Invoice {
  @IsUUID()
  @IsNotEmpty()
  uuid: string;
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  detail: InvoiceDetailDto;
  @IsUUID()
  @IsNotEmpty()
  userUuid: string;
}
