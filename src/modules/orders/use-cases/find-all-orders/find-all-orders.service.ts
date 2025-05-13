import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Purchase } from '../../entities/purchases.entity';

@Injectable()
export class FindAllPurchasesService {
  constructor(private prismaService: PrismaService) {}
  async execute(params) {
    try {
      let filters: any = {};

      if (params.initialDate && params.finalDate) {
        const originalDateInitial = new Date(params.initialDate);
        const originalDateFinal = new Date(params.finalDate);

        // Converter para o formato do PostgreSQL
        const formattedDateInitial = originalDateInitial.toISOString();
        const formattedDateFinal = originalDateFinal.toISOString();

        const adjustedDateInitial = new Date(formattedDateInitial);
        const adjustedDateFinal = new Date(formattedDateFinal);
        // Ajustar a hora
        adjustedDateInitial.setHours(0, 0, 0, 0); // Definir a hora para 00:00:00
        adjustedDateFinal.setHours(23, 59, 59, 999); // Definir a hora para 23:59:99

        filters['purchaseDate'] = {
          gte: adjustedDateInitial,
          lte: adjustedDateFinal,
        };
      }

      if (params.supplierId) {
        filters['supplierId'] = params.supplierId;
      }

      if (params.status) {
        filters['status'] = params.status;
      }
      if (params.inPay) {
        filters['inPay'] = params.inPay == '1' ? true : false;
      }

      const purchases = await this.prismaService.purchase.findMany({
        where: {
          ...filters,
        },
        include: {
          supplier: {
            select: {
              name: true,
            },
          },
          purchaseProducts: true,
        },
      });
      return purchases.map((purchase) => new Purchase(purchase));
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
