import { IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateProfileDto {
  name: string;

  //   @IsPhoneNumber()
  phone: string;

  @IsEmail()
  email: string;

  career: string;
}
