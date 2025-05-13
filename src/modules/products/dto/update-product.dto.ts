import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  cod: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  status: string;

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
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  baseCost: number;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  retailPrice: number;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  retailMargin: number;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  wholesalePrice: number;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  minWholesaleQty: number;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  wholesaleMargin: number;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  bulkPrice: number;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  minBulkQty: number;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  bulkMargin: number;

  @IsOptional()
  @Transform(({ value }) => value === 'null' || value === null ? null : parseFloat(value))
  @ApiProperty({ required: false })
  promoPrice?: number | null;

  @IsOptional()
  @Transform(({ value }) => value === 'null' || value === null ? null : new Date(value))
  @ApiProperty({ required: false })
  promoStart?: Date | null;

  @IsOptional()
  @Transform(({ value }) => value === 'null' || value === null ? null : new Date(value))
  @ApiProperty({ required: false })
  promoEnd?: Date | null;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  image?: string | null;
}