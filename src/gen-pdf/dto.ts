import { IsEmail, IsPhoneNumber } from 'class-validator';

export class CVdto {
  name: string;

  age: number;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;

  address: string;
}
