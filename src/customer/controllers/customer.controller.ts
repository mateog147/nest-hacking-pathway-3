import {
  BadRequestException,
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
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CustomerDto } from '../models/customer.dto';
import { PatchCustomerDto } from '../models/patch-customer.dto';
import { CreateCustomerDto } from '../models/create-customer.dto';
import { DateInterceptor } from 'src/providers/date.interceptor';

@Controller('customer')
@UsePipes(
  new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    exceptionFactory: () =>
      new BadRequestException('Los datos suministrados son invalidos'),
  }),
)
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getAllCustomers(): CustomerDto[] {
    return this.customerService.getAll();
  }

  @Get(':uuid')
  @UseInterceptors(DateInterceptor)
  getcustomerByUid(@Param('uuid') uuid: string): CustomerDto {
    const customer: CustomerDto | undefined =
      this.customerService.getById(uuid);

    if (customer) {
      return customer;
    }
    throw new HttpException('customer id not found', HttpStatus.NOT_FOUND);
  }

  @Post()
  addNewcustomer(@Body() createcustomerDto: CreateCustomerDto): CustomerDto {
    return this.customerService.create(createcustomerDto);
  }

  @Put(':uuid')
  editExistingcustomer(
    @Param('uuid') uuid: string,
    @Body() customerDto: CustomerDto,
  ): CustomerDto {
    return this.customerService.update(uuid, customerDto);
  }

  @Delete(':uuid')
  @UseInterceptors(DateInterceptor)
  removecustomer(@Param('uuid') uuid: string): boolean {
    return this.customerService.remove(uuid);
  }

  @Patch(':uuid')
  updatecustomerInfo(
    @Param('uuid') uuid: string,
    @Body() customerDto: PatchCustomerDto,
  ): CustomerDto {
    const customer: CustomerDto | undefined = this.customerService.patch(
      uuid,
      customerDto,
    );
    if (customer) {
      return customer;
    }
    throw new HttpException('customer id not found', HttpStatus.NOT_FOUND);
  }
}
