import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Supplier } from '../../../entities/suppliers/suppliers.entity';

@Injectable()
export class FindAllsuppliersService {
  constructor(private prismaService: PrismaService) {}
  async execute() {
    try {
      const supplier = await this.prismaService.supplier.findMany({
        orderBy: {
          status: 'asc',
        },
      });

      return supplier.map((supplier) => new Supplier(supplier));
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
