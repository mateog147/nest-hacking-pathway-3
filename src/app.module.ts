import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { HttpLoggerMiddleware } from './providers/http-logger.middleware';
import { CustomerController } from './customer/controllers/customer.controller';

@Module({
  imports: [CustomerModule, InvoiceModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpLoggerMiddleware)
      .forRoutes(
        CustomerController,
        { path: 'invoice', method: RequestMethod.ALL },
        { path: 'invoice/:uuid', method: RequestMethod.PUT },
      );
  }
}
