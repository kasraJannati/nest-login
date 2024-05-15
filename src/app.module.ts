import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { DogsController } from './dogs/dogs.controller';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/user.entity';
@Module({
  imports: [
    CatsModule,
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '',
      username: 'kasra',
      entities: [Users],
      database: 'pgWithNest',
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController, LoginController, DogsController],
  providers: [AppService],
})
// Applying middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer is a helper class. It provides serveral build-in methods to manage middleware.
    // forRoutes can take a single string, multiple strings, a RouteInfo obeject, a controller class and even multiple controller classes.
    consumer.apply(LoggerMiddleware).forRoutes('cats');
    //.forRoutes({ path: 'cats', method: RequestMethod.GET });
    //.forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
    //.forRoutes(CatController);
    //.exclude({path: 'cats', method: RequestMethod.GET},{path: 'cats', method: RequestMethod.POST},'cats/(.*)')
    // multiple middleware: consumer.apply(cors(), helmet(), logger).forRoutes(CatController)
  }
}
