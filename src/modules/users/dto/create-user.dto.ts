import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { AddressDTO } from 'src/shared/dtos/address.dto';
import { UserRoleEnum } from 'src/utils/enums/user-role.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  role: UserRoleEnum;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  cpf_cnpj: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  telephone: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  cell: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  status: string;
}
