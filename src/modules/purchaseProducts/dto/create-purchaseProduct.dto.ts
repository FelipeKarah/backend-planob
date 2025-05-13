import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePurchaseProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  purchaseId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  productId: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  unitaryValue: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  discountValue: number;
}
