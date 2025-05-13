import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Address } from '../../entities/address.entity';

@Injectable()
export class FindAddressByEmailService {
  constructor(private prismaService: PrismaService) {}
  async execute(id: string): Promise<Address> {
    try {
      const address = await this.prismaService.address.findUnique({
        where: { id },
      });

      return new Address(address);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
