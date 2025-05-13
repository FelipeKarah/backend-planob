import { Address } from './../../entities/address.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateAddressDto } from '../../dto/create-address.dto';
import { MailService } from 'src/shared/services/mail.service';

@Injectable()
export class CreateAddressService {
  constructor(private prismaService: PrismaService) {}

  // TEMPORARY
  async execute(createAddressDto: CreateAddressDto): Promise<Address> {
    try {
      const address = await MailService.sendSingle();

      console.log('address', address);
      // const address = await this.prismaService.address.create({
      //   data: {
      //     ...createAddressDto,
      //   },
      // });

      return new Address(address);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
