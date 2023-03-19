import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cars {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  make: string;

  @Column('text')
  model: string;

  @Column('int')
  miles: number;
}
