import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateSupplierDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  bannerUrl: string;

  @ApiProperty()
  @IsString()
  cnpj: string;

  @ApiProperty()
  @IsNumber()
  telephone: number;

  @ApiProperty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  categoryId: string;
}
