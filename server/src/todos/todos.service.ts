import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { UpdateCompletedTodoDto } from './dtos/update-completed-todo.dto';
import { UpdateTodoDto } from './dtos/updateTodo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async createTodo({ name, title }: CreateTodoDto) {
    try {
      const todo = new Todo();
      todo.name = name;
      todo.title = title;
      await todo.save();
      return todo;
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException(
        'An error ocurred while creating the todo',
      );
    }
  }

  async getTodos(): Promise<Todo[]> {
    try {
      return await Todo.find();
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException(
        'An error ocurred while creating the todo',
      );
    }
  }

  async getTodo(id: number): Promise<Todo> {
    try {
      const todo = await Todo.findOne(id);

      if (!todo) {
        throw new InternalServerErrorException('Todo not found');
      }
      return todo;
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException(
        'An error ocurred while getting the todo',
      );
    }
  }

  async updateTodo(
    id: number,
    { name, title, completed }: UpdateTodoDto,
  ): Promise<Todo> {
    try {
      const todo = await Todo.findOne(id);

      if (!todo) {
        throw new InternalServerErrorException('Todo not found');
      }
      todo.name = name;
      todo.title = title;
      todo.completed = completed;
      await todo.save();
      return todo;
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException(
        'An error ocurred while updating the todo',
      );
    }
  }

  async updateCompletedTodo(id: number, { completed }: UpdateCompletedTodoDto) {
    try {
      const todo = await Todo.findOne(id);
      if (!todo) {
        throw new InternalServerErrorException('Todo not found');
      }
      todo.completed = completed;
      await todo.save();
      return todo;
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException(
        'An error ocurred while updating the todo',
      );
    }
  }

  async deleteTodo(id: number): Promise<DeleteResult> {
    try {
      return await Todo.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(
        'An error ocurred while deleting the Todo',
      );
    }
  }
}
