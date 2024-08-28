import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  time: string;

  @Column()
  status: boolean;
}
