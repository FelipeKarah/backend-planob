import { Body, Controller, Post } from '@nestjs/common';
import { CreatePurchaseService } from './create-purchase.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePurchaseDto } from '../../dto/create-purchase.dto';

@Controller()
export class CreatePurchaseController {
  constructor(private readonly createPurchaseService: CreatePurchaseService) {}

  @Post('/purchases')
  @ApiTags('Purchases')
  handle(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.createPurchaseService.execute(createPurchaseDto);
  }
}
