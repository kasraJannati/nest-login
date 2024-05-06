import { Injectable, NestMiddleware } from '@nestjs/common';

// It's a middleware for the /cats route handlers
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(req, 'req');
    console.log(res, 'res');
    next();
  }
}

// Functional middleware
// export function logger(req: Request, res: Response, next: NextFunction) {
//   next();
// }
