import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class DeleteAddressService {
  constructor(private prismaService: PrismaService) {}

  async execute(id: string): Promise<void> {
    try {
      await this.prismaService.user.delete({
        where: { id },
      });
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
