import {IsOptional,IsNumber, IsEmail, IsString, IsBoolean,IsInt,Min,Max,Matches} from 'class-validator'

export class CreateUserDto {
    // @IsEmail()
    // email: string

    // @IsString()
    // password: string

    // @IsBoolean()
    // isValid: boolean

    @Matches((/[a-zA-Z]/))
    username: string;
    password: string;
    isValid: boolean;
    @IsEmail()
    @IsOptional()
    email?:string;
}
  