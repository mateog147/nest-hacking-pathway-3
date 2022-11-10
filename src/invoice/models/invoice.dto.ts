import { InvoiceDetailDto } from './invoice-detail.dto';
export interface InvoiceDto {
  uuid?: string;
  detail: InvoiceDetailDto;
  userUuid: string;
}
