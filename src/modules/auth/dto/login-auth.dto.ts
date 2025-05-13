import { ApiProperty } from "@nestjs/swagger";
import { isEmail, IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString, Length, MinLength } from "class-validator";

export class LoginAuthDto {

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        example: "example@example.com"
    })
    email: string;

    @IsString()
    @MinLength(8)
    @ApiProperty()
    password: string;
}
