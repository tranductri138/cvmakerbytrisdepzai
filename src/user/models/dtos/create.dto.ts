import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: 'email', description: 'Email', default: 'a@gmail.com' })
  @IsEmail()
  email: string;
  @ApiProperty({ type: 'string', description: 'Password', default: 'a' })
  @IsNotEmpty()
  password: string;
}
