import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdatePurchasesLargeScaleDto {
  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  purchases: Array<string>;
}
