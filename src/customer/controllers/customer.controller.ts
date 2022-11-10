import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CustomerDto } from '../models/customer.dto';
import { PatchCustomerDto } from '../models/patch-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getAllCustomers(): CustomerDto[] {
    return this.customerService.getAll();
  }

  @Get(':uuid')
  getcustomerByUid(@Param('uuid') uuid: string): CustomerDto {
    return (
      this.customerService.getById(uuid) ?? {
        uuid: '',
        name: '',
        nit: '',
        email: '',
      }
    );
  }

  @Post()
  addNewcustomer(@Body() createcustomerDto: CustomerDto): CustomerDto {
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
  removecustomer(@Param('uuid') uuid: string): boolean {
    return this.customerService.remove(uuid);
  }

  @Patch(':uuid')
  updatecustomerInfo(
    @Param('uuid') uuid: string,
    @Body() customerDto: PatchCustomerDto,
  ): CustomerDto {
    return (
      this.customerService.patch(uuid, customerDto) ?? {
        uuid: '',
        name: '',
        nit: '',
        email: '',
      }
    );
  }
}
