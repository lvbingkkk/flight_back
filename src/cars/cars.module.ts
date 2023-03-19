import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cars])],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
