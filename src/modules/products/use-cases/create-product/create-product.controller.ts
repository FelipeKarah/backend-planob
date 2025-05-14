import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateProductDto } from '../../dto/create-product.dto';
import { CreateProductService } from './create-product.service';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import { JwtAuthGuard } from 'src/helpers/guards/jwt-auth.guard';
import { RolesGuard } from 'src/helpers/guards/roles.guard';
import { UserRoleEnum } from 'src/utils/enums/user-role.enum';
import { Roles } from 'src/helpers/decorators/roles.decorator';

@Controller()
export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRoleEnum.ADMIN)
  @Post('/products')
  @ApiTags('Products')
  handle(@Body() createProductDto: CreateProductDto[]) {
    return this.createProductService.execute(createProductDto);
  }
}
