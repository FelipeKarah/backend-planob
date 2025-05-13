import { HttpException, Injectable } from '@nestjs/common';
import { Supplier } from 'src/modules/records/entities/suppliers/suppliers.entity';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class FindSupplierByIdService {
  constructor(private prismaService: PrismaService) {}
  async execute(id: string): Promise<Supplier> {
    try {
      const supplier = await this.prismaService.supplier.findUnique({
        where: { id },
      });

      return new Supplier(supplier);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
