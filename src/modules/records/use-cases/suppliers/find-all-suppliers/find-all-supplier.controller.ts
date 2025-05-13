import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/helpers/guards/jwt-auth.guard';
import { RolesGuard } from 'src/helpers/guards/roles.guard';
import { FindAllsuppliersService } from './find-all-supplier.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class FindAllsuppliersController {
  constructor(
    private readonly findAllsuppliersService: FindAllsuppliersService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiTags('Records')
  @Get('/suppliers')
  handle() {
    return this.findAllsuppliersService.execute();
  }
}
