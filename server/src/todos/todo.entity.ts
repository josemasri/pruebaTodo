import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column({ type: 'boolean', default: false })
  completed: boolean;

  @Column({ default: '' })
  name: string;

  @Column()
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
