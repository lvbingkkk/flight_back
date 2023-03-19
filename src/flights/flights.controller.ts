import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Flights } from './flights.entity';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
    constructor(private readonly flightsService: FlightsService) {}

    @Get()
    findAll(): Promise<Flights[]> {
        return this.flightsService.findAll();
    }

     // READ ONE
    @Get(":id")
    async findOne(@Param() param): Promise<Flights> {
        return this.flightsService.findOne(param.id);
    }

    @Get("cities/origins")
    getOrigins(): Promise<String[]> {
      return this.flightsService.getFlightOrigins();
    }

    @Get("cities/destinations")
    getDestinations(): Promise<String[]> {
      return this.flightsService.getFlightDestinations();
    }

    @Get("query/:orig/:dest")
    async query(@Param('orig') orig, @Param('dest') dest): Promise<any>{
        return this.flightsService.query(orig,dest);
    }

    @Post()
    async create(@Body() flight:Flights):Promise<Flights[]>{
        return this.flightsService.create(flight);
    }

    @Patch(':id/update')
    async update(@Param('id') id, @Body() flight:Flights): Promise<any>{
        flight.id = Number(id);
        return this.flightsService.update(flight);

    }

    @Delete(':id/delete')
    async delete(@Param('id') id):Promise<any>{
        return this.flightsService.delete(id)
    }
}
