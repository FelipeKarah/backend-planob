import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePurchaseDto {
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
