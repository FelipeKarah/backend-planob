import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { PurchaseProducts } from '../../entities/purchaseProduct.entity';

@Injectable()
export class FindProductByPurchaseService {
  constructor(private prismaService: PrismaService) {}
  async execute(idPurchase: string): Promise<PurchaseProducts> {
    try {
      const purchase = await this.prismaService.purchase.findUnique({
        where: {
          id: idPurchase,
        },
        include: {
          purchaseProducts: {
            include: {
              product: {
                select: {
                  cod: true,
                  name: true,
                },
              },
            },
          },
        },
      });

      return new PurchaseProducts(purchase);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
