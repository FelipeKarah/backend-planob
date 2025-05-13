import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { User } from '../../entities/user.entity';

@Injectable()
export class FindUserByEmailService {
  constructor(private prismaService: PrismaService) {}
  async execute(email: string): Promise<User> {
    try {
      const user = await this.prismaService.user.findUnique({
        where: { email },
      });

      return new User(user);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
