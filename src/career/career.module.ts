import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';
import { CareerEntity } from './models/entities/career.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CareerEntity])],
  controllers: [CareerController],
  providers: [CareerService],
  exports: [CareerService],
})
export class CareerModule {}
