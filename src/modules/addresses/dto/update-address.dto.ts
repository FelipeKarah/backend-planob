import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateAddressDto {
  @IsNumber()
  cep: number;

  @IsString()
  road: string;

  @IsString()
  place: string;

  @IsNumber()
  number: number;

  @IsString()
  district: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsString()
  status: string;

  @IsBoolean()
  inDelivery: boolean;
}
