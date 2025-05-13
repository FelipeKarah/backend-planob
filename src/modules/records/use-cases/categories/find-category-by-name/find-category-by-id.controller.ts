import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindCategoryByIdService } from './find-category-by-id.service';

@Controller()
export class FindCategoryByIdController {
  constructor(
    private readonly findCategoryByIdService: FindCategoryByIdService,
  ) {}

  @Get('/categories/:id')
  handle(@Param('id') id: string) {
    return this.findCategoryByIdService.execute(id);
  }
}
