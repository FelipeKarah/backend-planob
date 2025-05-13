import { HttpException, Inject, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/shared/services/prisma.service'
import { Product } from '../../entities/products.entity'
import { REQUEST } from '@nestjs/core'
import { Request } from 'express'

@Injectable()
export class FindProductByIdService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private prismaService: PrismaService,
  ) {}
  async execute(id: string): Promise<Product> {
    try {
      const product = await this.prismaService.product.findUnique({
        where: { id },
      })

      const protocol = this.request.protocol
      const host = this.request.get('host')

      return new Product({
        ...product,
        image:
          product.image !== ''
            ? `${protocol}://${host}/products/${product.image}`
            : product.image,
      })
    } catch (err) {
      throw new HttpException(err, 400)
    }
  }
}
