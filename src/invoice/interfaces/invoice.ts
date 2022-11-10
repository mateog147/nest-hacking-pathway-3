import { InvoiceDetail } from './invoice-detail';

export interface Invoice {
  uuid: string;
  detail: InvoiceDetail;
  userUuid: string;
}
