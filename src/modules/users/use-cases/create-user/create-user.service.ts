import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(private prismaService: PrismaService) {}

  // TEMPORARY
  async execute(createUserDto: CreateUserDto): Promise<User> {
    try {
      createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);

      const user = await this.prismaService.user.create({
        data: {
          ...createUserDto,
        },
      });

      return new User(user);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
