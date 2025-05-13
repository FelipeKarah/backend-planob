import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateCategoryService } from './update-category.service';
import { UpdateCategoryDto } from 'src/modules/records/dto/categories/update-category.dto';

@Controller()
export class UpdateCategoryController {
  constructor(private readonly updateCategoryService: UpdateCategoryService) {}

  @Put('/categories/:id')
  handle(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.updateCategoryService.execute(id, updateCategoryDto);
  }
}
