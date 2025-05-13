import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsOptional()
  @ApiProperty()
  status: string;

  @IsOptional()
  @ApiProperty()
  bannerUrl: string;

  @ApiProperty()
  @IsOptional()
  cnpj: number;

  @ApiProperty()
  @IsOptional()
  telephone: number;

  @ApiProperty()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsOptional()
  categoryId: string;
}
