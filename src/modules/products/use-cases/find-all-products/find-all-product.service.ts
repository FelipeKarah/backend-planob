import { HttpException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Product } from '../../entities/products.entity';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class FindAllProductsService {
  constructor(    @Inject(REQUEST) private readonly request: Request,
  private prismaService: PrismaService) {}

  async execute(filters?: { name?: string; type?: string }) {
    try {
      const products = await this.prismaService.product.findMany({
        where: {
          // Apply filters dynamically if provided
          ...(filters?.name && {
            name: { contains: filters.name, mode: 'insensitive' }, // Case-insensitive search
          }),
          ...(filters?.type && {
            type: { contains: filters.type, mode: 'insensitive' },
          }),
        },
        orderBy: {
          cod: 'asc',
        }, take: 20
      });


      const protocol = this.request.protocol;
      const host = this.request.get('host');

      const data = products.map((item) => ({
        ...item,
        image:
          item.image !== ''
            ? `${protocol}://${host}/products/${item.image}`
            : item.image,
      }));


      return data.map((product) => new Product(product));
    } catch (err) {
      throw new HttpException(err.message, 400);
    }
  }

  async executePublic(filters?: { name?: string; type?: string }) {
    try {
      const products = await this.prismaService.product.findMany({
        where: {
          // Apply filters dynamically if provided
          ...(filters?.name && {
            name: { contains: filters.name, mode: 'insensitive' }, // Case-insensitive search
          }),
          ...(filters?.type && {
            type: { contains: filters.type, mode: 'insensitive' },
          }),
        },
        orderBy: {
          cod: 'asc',
        },
        select:{
          id: true,
        name: true,
        cod: true,
        status: true,
        type: true,
        brand: true,
        unit: true,
        retailPrice: true,
        wholesalePrice: true,
        minWholesaleQty: true,
        promoPrice: true,
        promoStart: true,
        promoEnd: true,
        image: true,
        },
        // take: 20, // Limit of 20 products
      });

      const protocol = this.request.protocol;
      const host = this.request.get('host');

      const data = products.map((item) => ({
        ...item,
        image:
          item.image !== ''
            ? `${protocol}://${host}/products/${item.image}`
            : item.image,
      }));


      return data.map((product) => new Product(product));
    } catch (err) {
      throw new HttpException(err.message, 400);
    }
  }
}