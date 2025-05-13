import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { RolesGuard } from '../../helpers/guards/roles.guard';
import { CreatePurchaseController } from './use-cases/create-purchase/create-purchase.controller';
import { UpdatePurchaseController } from './use-cases/update-purchase/update-purchase.controller';
import { CreatePurchaseService } from './use-cases/create-purchase/create-purchase.service';
import { UpdatePurchaseService } from './use-cases/update-purchase/update-purchase.service';
import { PurchaseProductsModule } from '../purchaseProducts/purchaseProducts.module';
import { CreatePurchaseProductService } from '../purchaseProducts/use-cases/create-purchaseProduct/create-purchaseProduct.service';
import { FindAllPurchasesController } from './use-cases/find-all-purchases/find-all-purchases.controller';
import { FindAllPurchasesService } from './use-cases/find-all-purchases/find-all-purchases.service';
import { FindPurchaseByIdService } from './use-cases/find-purchase-by-id/find-purchase-by-id.service';
import { FindPurchaseByIdController } from './use-cases/find-purchase-by-id/find-purchase-by-id.controller';
import { UpdatePurchaseProductService } from '../purchaseProducts/use-cases/update-purchaseProduct/update-purchaseProduct.service';
import { UpdatePurchasesLargeScaleController } from './use-cases/update-purchases-large-scale/update-purchases-large-scale.controller';
import { UpdatePurchasesLargeScaleService } from './use-cases/update-purchases-large-scale/update-purchases-large-scale.service';

@Module({
  controllers: [
    /* Purchase */
    CreatePurchaseController,
    UpdatePurchaseController,
    FindAllPurchasesController,
    FindPurchaseByIdController,
    UpdatePurchasesLargeScaleController,
  ],
  providers: [
    /* Purchase */
    CreatePurchaseService,
    CreatePurchaseProductService,
    UpdatePurchaseProductService,
    UpdatePurchasesLargeScaleService,
    UpdatePurchaseService,
    FindAllPurchasesService,
    FindPurchaseByIdService,
    PrismaService,
    RolesGuard,
  ],
  imports: [PurchaseProductsModule],
})
export class PurchasesModule {}
