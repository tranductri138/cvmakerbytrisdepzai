import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './models/dtos/create.dto';
import { UpdateDto } from './models/dtos/login.dto';
import { User } from './models/entities/user.class';
import { UserEntity } from './models/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  //   async createUser(user: CreateUserDto) {
  //     user.password = await this.password.hashPass(user.password);
  //     return this.userRepo.save(user);
  //   }

  async createUser(user: CreateUserDto) {
    const newUser = new UserEntity();
    newUser.email = user.email;
    newUser.password = await newUser.hashPass(user.password);
    return this.userRepo.save(newUser);
  }

  async findOne(email: string) {
    const a = await this.userRepo.findOne({ email });
    console.log(a);

    return a;
  }

  deleteOne(email: string) {
    this.userRepo.delete({ email: email });
  }

  updateOne(id: string, user: UpdateDto) {
    this.userRepo.update(id, { ...user });
  }

  // find by Id
  async getUserById(id: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ userId: id });
    console.log(id);
    return user;
  }
}
