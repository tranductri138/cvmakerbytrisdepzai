import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateDto {
  @ApiProperty({ type: 'email', description: 'Email', default: 'a@gmail.com' })
  email?: string;
  @ApiProperty({ type: 'string', description: 'Password', default: 'a' })
  password?: string;
}
