import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Purchase } from '../../entities/purchases.entity';

@Injectable()
export class FindPurchaseByIdService {
  constructor(private prismaService: PrismaService) {}
  async execute(id: string): Promise<Purchase> {
    try {
      const purchase = await this.prismaService.purchase.findUnique({
        where: { id },
      });

      return new Purchase(purchase);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
