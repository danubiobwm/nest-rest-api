import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'


@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: "Este Campo Nome não pode estar Vazio" })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: "Este Campo Email não pode estar Vazio" })
  @IsOptional()
  email?: string;
}