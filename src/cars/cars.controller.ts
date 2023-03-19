import { Body, Controller, Get, Param, Post, Req ,Request} from '@nestjs/common';
import { Cars } from './cars.entity';
import { CarsService } from './cars.service';
@Controller('cars')
export class CarsController {

  constructor(private readonly CarsService: CarsService) {}

    @Get()
    findAll(): Promise<Cars[]> {
        return this.CarsService.findAll();
    }

    @Get("/:id")
    findOne(@Param() param): Promise<Cars> {
        return this.CarsService.findOne(param.id);
    }

    // @Get("abc")
    // findAbc():string{
    //     return "find the abc cars"
    // }
    // @Get()
    // findAll():string{
    //     return "find all cars"
    // }
    // @Get(':id')
    // findOne(@Req() request: Request): {} {
    //     return {id:1, make: 'honda', model: 'accord'};
    // }

    @Post()
    async create(@Body() carParams){
        return `I got your post request !
        You want to create a ${carParams.make}`;
    }
    @Post(":id")
    async update(@Body() carParams, @Param() params){
        return `I got your post request !
        You want to edit a ${carParams.make} belong to ${params.id}`;
    }

    @Post(":id/delete")
    async delete(@Param() params){
        return `I got your post request!
        You want to delete the ${params.id}`;
    }
}
