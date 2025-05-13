import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdatePurchaseService } from './update-purchase.service';
import { UpdatePurchaseDto } from '../../dto/update-purchase.dto';

@Controller()
export class UpdatePurchaseController {
  constructor(private readonly updatePurchaseService: UpdatePurchaseService) {}

  @Put('/purchases/:id')
  handle(
    @Param('id') id: string,
    @Body() updatePurchaseDto: UpdatePurchaseDto,
  ) {
    return this.updatePurchaseService.execute(id, updatePurchaseDto);
  }
}
