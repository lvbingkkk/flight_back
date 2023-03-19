import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Flights } from './flights.entity';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flights)
    private readonly flightsRepository: Repository<Flights>,
  ) {}

  async findOne(id: number): Promise<Flights> {
    return this.flightsRepository.findOneBy({id});
  }

  async findAll(): Promise<Flights[]> {
    return this.flightsRepository.find();
  }

  async getFlightOrigins(): Promise<String[]> {
    return this.flightsRepository.query("SELECT DISTINCT origin FROM flights");
  }

  async getFlightDestinations(): Promise<String[]> {
    return this.flightsRepository.query("SELECT DISTINCT destination FROM flights");
  }

  async query(orig:string, dest:string):Promise<any>{
    return await this.flightsRepository.findBy({origin: orig , destination: dest});
  }

  async create(flight:Flights):Promise<any>{
    return await this.flightsRepository.save(flight);
  }

  async update(flight:Flights):Promise<UpdateResult>{
    return await this.flightsRepository.update(flight.id, flight);
  }

  async delete (id: number):Promise<any>{
    return this.flightsRepository.delete(id);
  }

}
