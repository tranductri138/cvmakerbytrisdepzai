import { Body, Controller, Post } from '@nestjs/common';
import { CareerService } from './career.service';
import { CreateCareerDto } from './models/dtos/create.career.dto';

@Controller('career')
export class CareerController {
  constructor(private careerService: CareerService) {}

  @Post()
  createCareer(@Body() career: CreateCareerDto) {
    return this.careerService.createCareer(career);
  }
}
