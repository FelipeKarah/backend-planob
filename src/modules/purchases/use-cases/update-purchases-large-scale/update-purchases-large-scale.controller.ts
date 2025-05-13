import { Body, Controller, Put } from '@nestjs/common';
import { UpdatePurchasesLargeScaleDto } from '../../dto/update-purchase-large-scale.dto';
import { UpdatePurchasesLargeScaleService } from './update-purchases-large-scale.service';

@Controller()
export class UpdatePurchasesLargeScaleController {
  constructor(
    private readonly updatePurchasesLargeScaleService: UpdatePurchasesLargeScaleService,
  ) {}

  @Put('/purchases/pay/large-scale')
  handle(@Body() updatePurchasesLargeScaleDto: UpdatePurchasesLargeScaleDto) {
    return this.updatePurchasesLargeScaleService.execute(
      updatePurchasesLargeScaleDto,
    );
  }
}
