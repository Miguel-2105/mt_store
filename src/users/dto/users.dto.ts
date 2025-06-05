import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly dni: number;

  @IsString()
  @IsNotEmpty()
  readonly birthday: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
