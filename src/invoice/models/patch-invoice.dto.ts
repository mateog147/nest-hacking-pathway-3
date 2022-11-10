import { InvoiceDetailDto } from './invoice-detail.dto';
export interface PatchInvoiceDto {
  uuid?: string;
  detail?: InvoiceDetailDto;
  userUuid?: string;
}
