import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flights {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  origin: string;

  @Column('text')
  destination: string;

  @Column('int')
  flightNumber: number;

  @Column('datetime')
  depart:Date;

  @Column('datetime')
  arrive:Date;

  @Column('boolean')
  nonstop:boolean;
}
