import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsersService } from 'src/users/users.service';
import { JwtStrategy } from './jw.strategy';

@Module({
  imports:[PassportModule,UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),],
  providers: [LocalStrategy,JwtStrategy,AuthService,UsersService],
  controllers: [AuthController],
  exports:[AuthModule,AuthService]
})
export class AuthModule {}
