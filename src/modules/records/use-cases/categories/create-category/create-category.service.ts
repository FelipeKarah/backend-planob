import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Category } from 'src/modules/records/entities/categories/categories.entity';
import { CreateCategoryDto } from 'src/modules/records/dto/categories/create-category.dto';

@Injectable()
export class CreateCategoryService {
  constructor(private prismaService: PrismaService) {}

  // TEMPORARY
  async execute(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const category = await this.prismaService.category.create({
        data: {
          ...createCategoryDto,
        },
      });

      return new Category(category);
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
}
