import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Purchase } from '../../entities/purchases.entity';
import { CreatePurchaseDto } from '../../dto/create-purchase.dto';
import { CreatePurchaseProductService } from 'src/modules/purchaseProducts/use-cases/create-purchaseProduct/create-purchaseProduct.service';
import { CreatePurchaseProductDto } from 'src/modules/purchaseProducts/dto/create-purchaseProduct.dto';

@Injectable()
export class CreatePurchaseService {
  constructor(
    private prismaService: PrismaService,
    private createPurchaseProductService: CreatePurchaseProductService,
  ) {}

  async execute(createPurchaseDto: CreatePurchaseDto): Promise<Purchase> {
    try {
      const _purchase = { ...createPurchaseDto };
      delete _purchase.products;

      const purchase = await this.prismaService.purchase.create({
        data: {
          ..._purchase,
        },
      });

      createPurchaseDto.products.map(async (product: any) => {
        const createPurchaseProductDto: CreatePurchaseProductDto = {
          purchaseId: purchase.id,
          productId: product.id,
          amount: parseFloat(product.amount),
          unitaryValue: parseFloat(product.unitaryValue),
          discountValue: parseFloat(product.unitaryValue),
        };

        await this.createPurchaseProductService.execute(
          createPurchaseProductDto,
        );
      });

      console.log('sucesso');
      return new Purchase(purchase);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
