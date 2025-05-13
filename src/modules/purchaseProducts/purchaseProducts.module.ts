import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { RolesGuard } from '../../helpers/guards/roles.guard';
import { UpdatePurchaseProductController } from './use-cases/update-purchaseProduct/update-purchaseProduct.controller';
import { CreatePurchaseProductController } from './use-cases/create-purchaseProduct/create-purchaseProduct.controller';
import { CreatePurchaseProductService } from './use-cases/create-purchaseProduct/create-purchaseProduct.service';
import { UpdatePurchaseProductService } from './use-cases/update-purchaseProduct/update-purchaseProduct.service';
import { FindAllPurchaseProductsController } from './use-cases/find-all-purchaseProducts/find-all-purchaseProducts.controller';
import { FindAllPurchaseProductsService } from './use-cases/find-all-purchaseProducts/find-all-purchaseProducts.service';
import { FindProductByPurchaseService } from './use-cases/find-products-by-purchase/find-products-by-purchase.service';
import { FindProductByPurchaseController } from './use-cases/find-products-by-purchase/find-products-by-purchase.controller';

@Module({
  controllers: [
    /* PurchaseProduct */
    CreatePurchaseProductController,
    UpdatePurchaseProductController,
    FindAllPurchaseProductsController,
    FindProductByPurchaseController,
  ],
  providers: [
    /* PurchaseProduct */
    CreatePurchaseProductService,
    UpdatePurchaseProductService,
    FindAllPurchaseProductsService,
    FindProductByPurchaseService,
    PrismaService,
    RolesGuard,
  ],
})
export class PurchaseProductsModule {}
