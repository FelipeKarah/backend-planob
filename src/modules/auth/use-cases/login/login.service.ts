import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/shared/services/prisma.service';
import { LoginAuthDto } from '../../dto/login-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    private jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async execute(loginAuthDto: LoginAuthDto) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          email: loginAuthDto.email,
        },
      });
      if (
        !user ||
        !(await bcrypt.compare(loginAuthDto.password, user.password))
      )
        throw new HttpException('Credenciais inválidas', 400);

      const payload = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        sub: user.id,
        role: user.role,
      };

      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (err) {
      console.log('ERROR', err);
      throw new HttpException(err, 400);
    }
  }
}
