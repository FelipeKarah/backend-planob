import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { PurchaseProducts } from '../../entities/purchaseProduct.entity';

@Injectable()
export class FindAllPurchaseProductsService {
  constructor(private prismaService: PrismaService) {}
  async execute() {
    try {
      const purchasesProducts =
        await this.prismaService.purchaseProducts.findMany();

      return purchasesProducts.map(
        (purchasesProduct) => new PurchaseProducts(purchasesProduct),
      );
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
