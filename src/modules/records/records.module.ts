import { FindSupplierByIdService } from './use-cases/suppliers/find-supplier-by-id/find-supplier-by-id.service';
import { FindCategoryByIdService } from './use-cases/categories/find-category-by-name/find-category-by-id.service';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { RolesGuard } from '../../helpers/guards/roles.guard';
import { CreateCategoryController } from './use-cases/categories/create-category/create-category.controller';
import { UpdateCategoryController } from './use-cases/categories/update-category/update-category.controller';
import { FindAllCategoriesController } from './use-cases/categories/find-all-categories/find-all-categories.controller';
import { CreateCategoryService } from './use-cases/categories/create-category/create-category.service';
import { UpdateCategoryService } from './use-cases/categories/update-category/update-category.service';
import { FindAllCategoriesService } from './use-cases/categories/find-all-categories/find-all-categories.service';
import { CreateSupplierService } from './use-cases/suppliers/create-supplier/create-supplier.service';
import { UpdateSupplierService } from './use-cases/suppliers/update-supplier/update-supplier.service';
import { FindAllsuppliersService } from './use-cases/suppliers/find-all-suppliers/find-all-supplier.service';
import { FindAllsuppliersController } from './use-cases/suppliers/find-all-suppliers/find-all-supplier.controller';
import { UpdateSupplierController } from './use-cases/suppliers/update-supplier/update-supplier.controller';
import { CreateSupplierController } from './use-cases/suppliers/create-supplier/create-supplier.controller';
import { FindCategoryByIdController } from './use-cases/categories/find-category-by-name/find-category-by-id.controller';
import { FindSupplierByIdController } from './use-cases/suppliers/find-supplier-by-id/find-supplier-by-id.controller';

@Module({
  controllers: [
    /* Category */
    CreateCategoryController,
    UpdateCategoryController,
    FindAllCategoriesController,
    FindCategoryByIdController,
    /* Supplier */
    CreateSupplierController,
    UpdateSupplierController,
    FindAllsuppliersController,
    FindSupplierByIdController,
  ],
  providers: [
    /* Category */
    CreateCategoryService,
    UpdateCategoryService,
    FindAllCategoriesService,
    FindCategoryByIdService,
    /* Supplier */
    CreateSupplierService,
    UpdateSupplierService,
    FindAllsuppliersService,
    FindSupplierByIdService,
    PrismaService,
    RolesGuard,
  ],
})
export class RecordsModule {}
