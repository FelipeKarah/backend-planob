import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/helpers/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/helpers/guards/jwt-auth.guard';
import { RolesGuard } from 'src/helpers/guards/roles.guard';
import { FindAllProductsService } from './find-all-product.service';
import { ApiTags } from '@nestjs/swagger';
import { UserRoleEnum } from 'src/utils/enums/user-role.enum';

@Controller()
export class FindAllProductsController {
  constructor(
    private readonly findAllProductsService: FindAllProductsService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRoleEnum.ADMIN)
  @ApiTags('Products')
  @Get('/products')
  handle(@Query() filters: { name?: string; type?: string }) {
    return this.findAllProductsService.execute(filters);
  }

  @Get('/products/public')
  public(@Query() filters: { name?: string; type?: string }) {
    return this.findAllProductsService.executePublic(filters);
  }
}

