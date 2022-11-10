import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { InvoiceDetail } from './../interfaces/invoice-detail';
export class InvoiceDetailDto implements InvoiceDetail {
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @IsNotEmpty()
  @IsString()
  description: string;
}
