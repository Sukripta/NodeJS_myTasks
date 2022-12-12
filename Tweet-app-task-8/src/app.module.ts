import { Module } from '@nestjs/common';
import { UserController } from './app.controller';
import { UserService } from './app.service';
// import { UserController } from './user/user.controller';
// import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
