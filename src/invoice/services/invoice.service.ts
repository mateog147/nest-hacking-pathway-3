import { Injectable } from '@nestjs/common';
import { InvoiceDto } from '../models/invoice.dto';
import { v4 as uuid } from 'uuid';
import { PatchInvoiceDto } from '../models/patch-invoice.dto';
@Injectable()
export class InvoiceService {
  private invoices: InvoiceDto[] = [];

  constructor() {
    this.invoices.push({
      uuid: uuid(),
      userUuid: uuid(),
      detail: { amount: 350, description: 'Servicios y varios' },
    });
    this.invoices.push({
      uuid: uuid(),
      userUuid: uuid(),
      detail: { amount: 120, description: 'Cacharros' },
    });
  }

  getAll(): InvoiceDto[] {
    return this.invoices;
  }

  getById(id: string): InvoiceDto | undefined {
    return this.invoices.find((invoice) => invoice.uuid == id);
  }

  remove(uuid: string): boolean {
    const oldinvoice: InvoiceDto | undefined = this.invoices.find(
      (invoice) => invoice.uuid == uuid,
    );
    if (oldinvoice) {
      const index = this.invoices.indexOf(oldinvoice);
      this.invoices.splice(index, 1);
      return true;
    }
    return false;
  }

  create(data: InvoiceDto): InvoiceDto {
    this.invoices.push({
      uuid: uuid(),
      userUuid: data.userUuid,
      detail: data.detail,
    });
    return this.invoices[this.invoices.length - 1];
  }

  update(id: string, invoiceDto: InvoiceDto): InvoiceDto {
    const oldinvoice: InvoiceDto | undefined = this.invoices.find(
      (invoice) => invoice.uuid == id,
    );
    if (oldinvoice) {
      oldinvoice.userUuid = invoiceDto.userUuid;
      oldinvoice.detail = invoiceDto.detail;
      return oldinvoice;
    }
    return this.create(invoiceDto);
  }

  patch(uuid: string, invoiceDto: PatchInvoiceDto): InvoiceDto | undefined {
    const oldinvoice = this.invoices.find((invoice) => invoice.uuid == uuid);
    if (oldinvoice) {
      const index = this.invoices.indexOf(oldinvoice);
      const updatedinvoice = {
        ...oldinvoice,
        ...invoiceDto,
      };
      this.invoices[index] = updatedinvoice;
      return updatedinvoice;
    }
    return undefined;
  }
}
