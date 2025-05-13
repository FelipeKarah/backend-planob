import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/helpers/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/helpers/guards/jwt-auth.guard';
import { RolesGuard } from 'src/helpers/guards/roles.guard';
import { FindAllAddressesService } from './find-all-addresses.service';

@Controller()
export class FindAllAddressesController {
  constructor(
    private readonly findAllAddressesService: FindAllAddressesService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/addresses')
  handle() {
    return this.findAllAddressesService.execute();
  }
}
