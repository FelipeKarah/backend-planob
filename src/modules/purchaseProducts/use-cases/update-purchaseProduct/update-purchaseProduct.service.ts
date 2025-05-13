import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/services/prisma.service";
import { PurchaseProducts } from "../../entities/purchaseProduct.entity";
import { UpdatePurchaseProductDto } from "../../dto/update-purchaseProduct.dto";

@Injectable()
export class UpdatePurchaseProductService {
  constructor(private prismaService: PrismaService) {}
  async execute(
    id: string,
    updatePurchaseProductDto: UpdatePurchaseProductDto
  ): Promise<PurchaseProducts> {
    try {
      const purchase = await this.prismaService.purchaseProducts.update({
        data: updatePurchaseProductDto,
        where: { id },
      });

      return new PurchaseProducts(purchase);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
