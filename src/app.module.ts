import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RolesGuard } from './helpers/guards/roles.guard';
import { JwtStrategy } from './helpers/strategies/jwt.strategy';
import { PrismaService } from './shared/services/prisma.service';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AddressesModule } from './modules/addresses/addresses.module';
import { RecordsModule } from './modules/records/records.module';
import { ProductsModule } from './modules/products/products.module';
import { PurchasesModule } from './modules/purchases/purchases.module';
import { PurchaseProductsModule } from './modules/purchaseProducts/purchaseProducts.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ThrottlerModule.forRoot({
      ttl: 1,
      limit: 3,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload/documents'),
    }),
    AuthModule,
    UsersModule,
    AddressesModule,
    ProductsModule,
    RecordsModule,
    PurchasesModule,
    PurchaseProductsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    PrismaService,
    JwtStrategy,
    RolesGuard,
  ],
})
export class AppModule {}
