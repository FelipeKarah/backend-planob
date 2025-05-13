import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryService } from './create-category.service';
import { CreateCategoryDto } from 'src/modules/records/dto/categories/create-category.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class CreateCategoryController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}

  @Post('/categories')
  @ApiTags('Records')
  handle(@Body() createCategoryDto: CreateCategoryDto) {
    return this.createCategoryService.execute(createCategoryDto);
  }
}
