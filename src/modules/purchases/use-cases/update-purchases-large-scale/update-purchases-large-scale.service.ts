import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Purchase } from '../../entities/purchases.entity';
import { UpdatePurchaseDto } from '../../dto/update-purchase.dto';
import { UpdatePurchaseProductDto } from 'src/modules/purchaseProducts/dto/update-purchaseProduct.dto';
import { CreatePurchaseProductService } from 'src/modules/purchaseProducts/use-cases/create-purchaseProduct/create-purchaseProduct.service';
import { UpdatePurchaseProductService } from 'src/modules/purchaseProducts/use-cases/update-purchaseProduct/update-purchaseProduct.service';
import { UpdatePurchasesLargeScaleDto } from '../../dto/update-purchase-large-scale.dto';

@Injectable()
export class UpdatePurchasesLargeScaleService {
  constructor(private prismaService: PrismaService) {}
  async execute(
    updatePurchasesLargeScaleDto: UpdatePurchasesLargeScaleDto,
  ): Promise<Purchase> {
    try {
      const purchase = await this.prismaService.purchase.updateMany({
        where: {
          id: { in: updatePurchasesLargeScaleDto.purchases },
        },
        data: { inPay: true, paymentDate: new Date() },
      });

      return new Purchase(purchase);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
