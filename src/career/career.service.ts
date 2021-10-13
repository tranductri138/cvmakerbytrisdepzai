import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCareerDto } from './models/dtos/create.career.dto';
import { CareerEntity } from './models/entities/career.entity';

@Injectable()
export class CareerService {
  constructor(
    @InjectRepository(CareerEntity)
    private readonly careerRepo: Repository<CareerEntity>,
  ) {}

  async findOne(name: string): Promise<CareerEntity> {
    const a = await this.careerRepo.findOne({ name });
    return a;
  }

  async createCareer(career: CreateCareerDto): Promise<CreateCareerDto> {
    const name = career.name;
    const career1 = await this.careerRepo.findOne({ name: name });
    console.log(career);
    console.log(career1);
    if (career1 == undefined) {
      const newCareer = new CareerEntity();
      newCareer.name = career.name;
      newCareer.questionFrist = career.questionFrist;
      newCareer.questionSencond = career.questionSecond;
      newCareer.questionThrird = career.questionThird;
      await this.careerRepo.save(newCareer);
    } else {
      throw new ConflictException('Cannot add add to this entity !!');
    }
    return career;
  }
}
