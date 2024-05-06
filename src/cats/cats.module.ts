import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// *** Global is not recommended, but it can be useful in some cases.
// *** The @Global() decorator makes the CatsModule global-scoped, which means that it can be imported by any module.
// @Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // Export CatsService so that it can be used in other modules - shared module.
})
export class CatsModule {}
