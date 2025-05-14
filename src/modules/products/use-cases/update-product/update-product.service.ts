import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UpdateProductDto } from '../../dto/update-product.dto';
import { Product } from '../../entities/products.entity';
import * as fs from 'fs';

@Injectable()
export class UpdateProductService {
  constructor(private prismaService: PrismaService) {}

  async execute(
    id: string,
    updateProductDto: UpdateProductDto,
    fileName: string,
  ): Promise<Product> {
    try {
  
      // Converter todos os campos numéricos para Float
      const numericFields = [
        'cod', 'baseCost', 'retailPrice', 'retailMargin',
        'wholesalePrice', 'minWholesaleQty', 'wholesaleMargin',
        'bulkPrice', 'minBulkQty', 'bulkMargin', 'promoPrice'
      ];
  
      const transformedData = {
        ...updateProductDto,
        image: fileName,
      };
  
      // Converter campos numéricos
      numericFields.forEach(field => {
        if (transformedData[field] !== undefined) {
          transformedData[field] = transformedData[field] === null || transformedData[field] === 'null' 
            ? null 
            : parseFloat(transformedData[field]);
        }
      });
  
      // Tratar campos de data
      const dateFields = ['promoStart', 'promoEnd'];
      dateFields.forEach(field => {
        if (transformedData[field] !== undefined) {
          transformedData[field] = transformedData[field] === null || transformedData[field] === 'null' 
            ? null 
            : new Date(transformedData[field]);
        }
      });
  
      const product = await this.prismaService.product.update({
        data: transformedData,
        where: { id },
      });
  
  
      return new Product(product);
    } catch (err) {
      if (fileName) {
        fs.unlinkSync(
          `./${process.env.DESTINATION_DOCUMENT_UPLOAD}/products/${fileName}`,
        );
      }
      console.error('Erro na atualização:', err);
      throw new HttpException(err.message, 400);
    }
  }

  private async getImageNameById(id: string): Promise<{ image: string | null }> {
    const product = await this.prismaService.product.findUnique({
      where: { id },
      select: { image: true },
    });
    return product || { image: null };
  }
}