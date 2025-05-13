import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './use-cases/login/login.controller';
import { LoginService } from './use-cases/login/login.service';
import { PrismaService } from 'src/shared/services/prisma.service';
@Module({
  controllers: [LoginController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '12h' },
    }),
    UsersModule,
  ],
  providers: [LoginService, PrismaService],
  exports: [],
})
export class AuthModule {}
