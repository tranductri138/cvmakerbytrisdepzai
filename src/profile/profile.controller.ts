import { Body, Controller, Post } from '@nestjs/common';
import { CreateProfileDto } from './models/dtos/create.profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post()
  createProfile(@Body() profile: CreateProfileDto) {
    return this.profileService.createProfile(profile);
  }
}
