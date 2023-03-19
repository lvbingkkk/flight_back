import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars/cars.entity';
import { CarsModule } from './cars/cars.module';
import { Flights } from './flights/flights.entity';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'bing6117',
      database: 'transportation',
      entities: [Cars,Flights],
      synchronize: true,
    }),
    CarsModule,
    FlightsModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
