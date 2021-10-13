import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { Role } from '../dtos/roles.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';

@Entity('user')
export class UserEntity {
  @ApiPropertyOptional({ type: String })
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }
  async hashPass(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async isPass(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
