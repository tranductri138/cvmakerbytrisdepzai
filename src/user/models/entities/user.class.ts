import { IsEmail, IsString } from 'class-validator';
import { Role } from '../dtos/roles.enum';

export class User {
  id?: string;

  @IsEmail()
  email?: string;

  @IsString()
  password?: string;

  role?: Role;
}
