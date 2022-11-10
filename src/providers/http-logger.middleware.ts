import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.url} `);
    if (req.method == 'POST' || req.method == 'PUT' || req.method == 'PATCH') {
      console.log(req.body);
    }
    if (req.params.uuid) {
      console.log('uuid :>> ', req.params.uuid);
    }
    next();
  }
}
