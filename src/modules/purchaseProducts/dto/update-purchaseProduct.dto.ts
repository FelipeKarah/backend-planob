import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdatePurchaseProductDto {
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
