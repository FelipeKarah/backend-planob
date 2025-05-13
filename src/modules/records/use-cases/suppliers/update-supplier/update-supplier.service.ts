import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import * as bcrypt from 'bcrypt';
import { Supplier } from 'src/modules/records/entities/suppliers/suppliers.entity';
import { UpdateSupplierDto } from 'src/modules/records/dto/suppliers/update-supplier.dto';

@Injectable()
export class UpdateSupplierService {
  constructor(private prismaService: PrismaService) {}
  async execute(
    id: string,
    updateSupplierDto: UpdateSupplierDto,
  ): Promise<Supplier> {
    try {
      const supplier = await this.prismaService.supplier.update({
        data: updateSupplierDto,
        where: { id },
      });

      return new Supplier(supplier);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
