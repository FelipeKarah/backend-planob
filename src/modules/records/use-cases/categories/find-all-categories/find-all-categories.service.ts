import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Category } from '../../../entities/categories/categories.entity';

@Injectable()
export class FindAllCategoriesService {
  constructor(private prismaService: PrismaService) {}
  async execute() {
    try {
      const categories = await this.prismaService.category.findMany({
        orderBy: {
          status: 'asc',
        },
      });

      return categories.map((category) => new Category(category));
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
