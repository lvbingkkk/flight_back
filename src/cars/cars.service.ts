import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cars } from './cars.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Cars)
    private readonly carsRepository: Repository<Cars>,
  ) {}

  async findAll(): Promise<Cars[]> {
    return this.carsRepository.find();
  }

  async findOne(id: number): Promise<Cars> {
    return this.carsRepository.findOneBy({id});
  }
}
