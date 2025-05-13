import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/helpers/guards/jwt-auth.guard';
import { RolesGuard } from 'src/helpers/guards/roles.guard';
import { FindAllCategoriesService } from './find-all-categories.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class FindAllCategoriesController {
  constructor(
    private readonly findAllCategoriesService: FindAllCategoriesService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiTags('Records')
  @Get('/categories')
  handle() {
    return this.findAllCategoriesService.execute();
  }
}
