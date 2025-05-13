import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Address } from '../../entities/address.entity';

@Injectable()
export class FindAllAddressesService {
  constructor(private prismaService: PrismaService) {}
  async execute() {
    try {
      const addresses = await this.prismaService.address.findMany();

      return addresses.map((address) => new Address(address));
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
