import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from 'src/providers/auth.guard';
import { DateInterceptor } from 'src/providers/date.interceptor';
import { CreateInvoiceDto } from '../models/create-invoice.dto';
import { InvoiceDto } from '../models/invoice.dto';
import { PatchInvoiceDto } from '../models/patch-invoice.dto';
import { InvoiceService } from '../services/invoice.service';

@Controller('invoice')
@UseGuards(AuthGuard)
@UsePipes(
  new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }),
)
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}
  @Get()
  getAllinvoices(): InvoiceDto[] {
    return this.invoiceService.getAll();
  }

  @Get(':uuid')
  getinvoiceByUid(@Param('uuid') uuid: string): InvoiceDto {
    const invoice: InvoiceDto | undefined = this.invoiceService.getById(uuid);
    if (invoice) {
      return invoice;
    }
    throw new HttpException('customer id not found', HttpStatus.NOT_FOUND);
  }

  @Delete(':uuid')
  @UseInterceptors(DateInterceptor)
  removeinvoice(@Param('uuid') uuid: string): boolean {
    return this.invoiceService.remove(uuid);
  }

  @Post()
  addNewinvoice(@Body() createinvoiceDto: CreateInvoiceDto): InvoiceDto {
    return this.invoiceService.create(createinvoiceDto);
  }

  @Put(':uuid')
  editExistinginvoice(
    @Param('uuid') uuid: string,
    @Body() invoiceDto: CreateInvoiceDto,
  ): InvoiceDto {
    return this.invoiceService.update(uuid, invoiceDto);
  }

  @Patch(':uuid')
  updateinvoiceInfo(
    @Param('uuid') uuid: string,
    @Body() invoiceDto: PatchInvoiceDto,
  ): InvoiceDto {
    const invoice: InvoiceDto | undefined = this.invoiceService.patch(
      uuid,
      invoiceDto,
    );
    if (invoice) {
      return invoice;
    }
    throw new HttpException('customer id not found', HttpStatus.NOT_FOUND);
  }
}
