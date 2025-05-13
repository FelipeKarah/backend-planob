import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  cod: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  type: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  brand: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  unit: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  baseCost: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  retailPrice: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  retailMargin: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  wholesalePrice: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  minWholesaleQty: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  wholesaleMargin: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  bulkPrice: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  minBulkQty: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  bulkMargin: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  promoPrice?: number;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ required: false })
  promoStart?: Date;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ required: false })
  promoEnd?: Date;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  image?: string;
}
