import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [TypeOrmModule.forFeature([Todo])],
})
export class TodosModule {}
