import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UpdateAddressDto } from '../../dto/update-address.dto';
import { Address } from '../../entities/address.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UpdateAddressService {
  constructor(private prismaService: PrismaService) {}
  async execute(
    id: string,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    try {
      const address = await this.prismaService.address.update({
        data: updateAddressDto,
        where: { id },
      });

      return new Address(address);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
