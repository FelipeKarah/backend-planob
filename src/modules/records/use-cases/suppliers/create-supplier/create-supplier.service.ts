import { Supplier } from 'src/modules/records/entities/suppliers/suppliers.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateSupplierDto } from 'src/modules/records/dto/suppliers/create-supplier.dto';

@Injectable()
export class CreateSupplierService {
  constructor(private prismaService: PrismaService) {}

  // TEMPORARY
  async execute(createSupplierDto: any): Promise<Supplier> {
    try {
      const supplier = await this.prismaService.supplier.create({
        data: {
          ...createSupplierDto,
        },
      });

      return new Supplier(supplier);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
