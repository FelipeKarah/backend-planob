import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { PurchaseProducts } from '../../entities/purchaseProduct.entity';
import { CreatePurchaseProductDto } from '../../dto/create-purchaseProduct.dto';

@Injectable()
export class CreatePurchaseProductService {
  constructor(private prismaService: PrismaService) {}

  async execute(
    createPurchaseProductDto: CreatePurchaseProductDto,
  ): Promise<PurchaseProducts> {
    try {
      const purchase = await this.prismaService.purchaseProducts.create({
        data: {
          ...createPurchaseProductDto,
        },
      });

      return new PurchaseProducts(purchase);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
