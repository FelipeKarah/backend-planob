import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { User } from '../../entities/user.entity';

@Injectable()
export class FindAllUsersService {
  constructor(private prismaService: PrismaService) {}
  async execute() {
    try {
      const users = await this.prismaService.user.findMany();

      return users.map((user) => new User(user));
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
