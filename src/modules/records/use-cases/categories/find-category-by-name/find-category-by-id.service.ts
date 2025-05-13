import { HttpException, Injectable } from '@nestjs/common';
import { Category } from 'src/modules/records/entities/categories/categories.entity';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class FindCategoryByIdService {
  constructor(private prismaService: PrismaService) {}
  async execute(id: string): Promise<Category> {
    try {
      const category = await this.prismaService.category.findUnique({
        where: { id },
      });

      return new Category(category);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
