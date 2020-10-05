import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'


@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: "Este Campo não pode estar Vazio" })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: "Este Campo não pode estar Vazio" })
  email: string;
}