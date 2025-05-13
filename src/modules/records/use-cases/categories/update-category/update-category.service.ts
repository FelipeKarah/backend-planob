import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import * as bcrypt from 'bcrypt';
import { Category } from 'src/modules/records/entities/categories/categories.entity';
import { UpdateCategoryDto } from 'src/modules/records/dto/categories/update-category.dto';

@Injectable()
export class UpdateCategoryService {
  constructor(private prismaService: PrismaService) {}
  async execute(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    try {
      const category = await this.prismaService.category.update({
        data: updateCategoryDto,
        where: { id },
      });

      return new Category(category);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
