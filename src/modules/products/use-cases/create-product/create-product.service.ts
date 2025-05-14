import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateProductDto } from '../../dto/create-product.dto';
import * as fs from 'fs';

@Injectable()
export class CreateProductService {
  constructor(private prismaService: PrismaService) {}

  // Lida com conversões e decide se deve criar ou atualizar os produtos
  async execute(createProductDto: CreateProductDto[]): Promise<void> {
    try {


      // Ajustando o formato dos dados antes de salvar no banco
      const formattedData = createProductDto.map((item: any) => ({
        ...item,
        cod: parseFloat(item.cod), // Convertendo cod para float
        promoStart: item.promoStart ? new Date(item.promoStart) : null, // Convertendo promoStart para Date ou null
        promoEnd: item.promoEnd ? new Date(item.promoEnd) : null, // Convertendo promoEnd para Date ou null
      }));

      // Usando upsert para criar ou atualizar os produtos
      for (const product of formattedData) {
        await this.prismaService.product.upsert({
          where: {
            cod: product.cod, // Determina se é uma atualização ou criação com base no código
          },
          update: {
            name: product.name,
            type: product.type,
            brand: product.brand,
            unit: product.unit,
            baseCost: product.baseCost,
            retailPrice: product.retailPrice,
            retailMargin: product.retailMargin,
            wholesalePrice: product.wholesalePrice,
            minWholesaleQty: product.minWholesaleQty,
            wholesaleMargin: product.wholesaleMargin,
            bulkPrice: product.bulkPrice,
            minBulkQty: product.minBulkQty,
            bulkMargin: product.bulkMargin,
            promoPrice: product.promoPrice,
            promoStart: product.promoStart,
            promoEnd: product.promoEnd,
          },
          create: {
            cod: product.cod,
            name: product.name,
            type: product.type,
            brand: product.brand,
            unit: product.unit,
            baseCost: product.baseCost,
            retailPrice: product.retailPrice,
            retailMargin: product.retailMargin,
            wholesalePrice: product.wholesalePrice,
            minWholesaleQty: product.minWholesaleQty,
            wholesaleMargin: product.wholesaleMargin,
            bulkPrice: product.bulkPrice,
            minBulkQty: product.minBulkQty,
            bulkMargin: product.bulkMargin,
            promoPrice: product.promoPrice,
            promoStart: product.promoStart,
            promoEnd: product.promoEnd,
            image: product.image,
          },
        });
      }

    } catch (err) {

     
      console.error('Error creating/updating product:', err); // Log para debugging
      throw new HttpException('Error creating/updating product', 400);
    }
  }
}
