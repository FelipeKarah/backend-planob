import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/helpers/guards/jwt-auth.guard';
import { RolesGuard } from 'src/helpers/guards/roles.guard';
import { FindAllPurchasesService } from './find-all-purchases.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class FindAllPurchasesController {
  constructor(
    private readonly findAllPurchasesService: FindAllPurchasesService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiTags('Purchases')
  @Get('/purchases')
  handle(@Query() params: any) {
    return this.findAllPurchasesService.execute(params);
  }
}
