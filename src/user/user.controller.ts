import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Delete,
  Query,
  Param,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LocalStrategy } from 'src/auth/auth.strategy';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { LocalAuthGuard } from 'src/auth/guard/local-auth.guard';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { AuthService } from 'src/auth/service/auth.service';
import { CreateUserDto } from './models/dtos/create.dto';
import { UpdateDto } from './models/dtos/login.dto';
import { Role } from './models/dtos/roles.enum';
import { User } from './models/entities/user.class';
import { UserEntity } from './models/entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private localStrategy: LocalStrategy,
  ) {}

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() user: CreateUserDto) {
    // decorator @UseGuards bug tris can't able fix
    const userLocal = await this.localStrategy.validate(
      user.email,
      user.password,
    );
    return await this.authService.login(userLocal);
  }

  @Post()
  async create(@Body() user: CreateUserDto) {
    const { email, ...rest } = await this.userService.createUser(user);
    return { 'email:': email, login: 'success ' };
  }

  // delete have access token
  @ApiBearerAuth('token')
  @hasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':email')
  async deleteOne(@Param('email') email: string): Promise<any> {
    await this.userService.deleteOne(email);
    return { messeage: 'delete successs !!' };
  }

  @ApiBearerAuth('token')
  @hasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(':email')
  async updateOne(
    @Param('email') email: string,
    @Body() user: UpdateDto,
  ): Promise<any> {
    await this.userService.updateOne(email, user);
    return { messeage: 'update success !!!' };
  }
}
