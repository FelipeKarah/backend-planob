import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UpdateUserService {
  constructor(private prismaService: PrismaService) {}
  async execute(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      updateUserDto.password = bcrypt.hashSync(updateUserDto.password, 10);

      const user = await this.prismaService.user.update({
        data: updateUserDto,
        where: { id },
      });

      return new User(user);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
