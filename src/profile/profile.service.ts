import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CareerService } from 'src/career/career.service';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './models/dtos/create.profile.dto';
import { ProfileEntity } from './models/entities/profile.entity';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepo: Repository<ProfileEntity>,
    private careerService: CareerService,
    private profileRepobyMe: ProfileRepository,
  ) {}

  async createProfile(profile: CreateProfileDto): Promise<CreateProfileDto> {
    // const profileEntity = new ProfileEntity();
    // profileEntity.name = profile.name;
    // profileEntity.phone = profile.phone;
    // profileEntity.email = profile.email;
    const career = await this.careerService.findOne(profile.career);
    if (career.name == profile.career) {
      await this.profileRepobyMe.createProfile(
        profile.name,
        profile.phone,
        profile.email,
        profile.career,
      );
    } else {
      throw new NotFoundException('Career not found !!!');
    }
    return profile;
  }

  answersQuestion() {
    // this.profileRepo.update();
  }
}
