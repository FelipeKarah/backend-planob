import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Product } from 'src/modules/products/entities/products.entity';

export class CreatePurchaseDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  supplierId: string;

  purchaseDate: Date;

  paymentDate: Date;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  inPay: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  inBilletGenerated: boolean;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  status: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  products: Array<Product>;
}
