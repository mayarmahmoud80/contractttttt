import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
//import { Prisma } from '@prisma/client';

export class CreateUserDto {
  @IsNotEmpty({ message: 'required' })
  @IsString({ message: 'this not string' })
  @Length(3, 255, { message: 'at least 3 characters' })
  name: string;

  @IsNotEmpty({ message: 'Email required' })
  @IsEmail({}, { message: 'Email not valid' })
  email: string;
}
