import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { RolesGuard } from '../../helpers/guards/roles.guard';
import { CreateProductController } from './use-cases/create-product/create-product.controller';
import { UpdateProductController } from './use-cases/update-product/update-product.controller';
import { FindAllProductsController } from './use-cases/find-all-products/find-all-product.controller';
import { CreateProductService } from './use-cases/create-product/create-product.service';
import { UpdateProductService } from './use-cases/update-product/update-product.service';
import { FindAllProductsService } from './use-cases/find-all-products/find-all-product.service';
import { FindProductByIdService } from './use-cases/find-product-by-id/find-product-by-id.service';
import { FindProductByIdController } from './use-cases/find-product-by-id/find-product-by-id.controller';

@Module({
  controllers: [
    /* Product */
    CreateProductController,
    UpdateProductController,
    FindAllProductsController,
    FindProductByIdController,
  ],
  providers: [
    /* Product */
    CreateProductService,
    UpdateProductService,
    FindAllProductsService,
    FindProductByIdService,
    PrismaService,
    RolesGuard,
  ],
})
export class ProductsModule {}
