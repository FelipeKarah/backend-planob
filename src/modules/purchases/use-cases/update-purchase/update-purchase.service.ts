import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/services/prisma.service";
import { Purchase } from "../../entities/purchases.entity";
import { UpdatePurchaseDto } from "../../dto/update-purchase.dto";
import { UpdatePurchaseProductDto } from "src/modules/purchaseProducts/dto/update-purchaseProduct.dto";
import { CreatePurchaseProductService } from "src/modules/purchaseProducts/use-cases/create-purchaseProduct/create-purchaseProduct.service";
import { UpdatePurchaseProductService } from "src/modules/purchaseProducts/use-cases/update-purchaseProduct/update-purchaseProduct.service";

@Injectable()
export class UpdatePurchaseService {
  constructor(
    private prismaService: PrismaService,
    private createPurchaseProductService: CreatePurchaseProductService,
    private updatePurchaseProductService: UpdatePurchaseProductService
  ) {}
  async execute(
    id: string,
    updatePurchaseDto: UpdatePurchaseDto
  ): Promise<Purchase> {
    try {
      const _purchase = { ...updatePurchaseDto };
      delete _purchase.products;

      const purchase = await this.prismaService.purchase.update({
        data: _purchase,
        where: { id },
      });
      updatePurchaseDto.products.map(async (product: any) => {
        const createPurchaseProductDto: UpdatePurchaseProductDto = {
          purchaseId: product.purchaseId,
          productId: product.productId,
          amount: parseFloat(product.amount),
          unitaryValue: parseFloat(product.unitaryValue),
          discountValue: parseFloat(product.discountValue),
        };

        console.log("product.id", product.id);
        if (product.id) {
          await this.updatePurchaseProductService.execute(
            product.id,
            createPurchaseProductDto
          );
        }
      });

      return new Purchase(purchase);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
