import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { UpdateCompletedTodoDto } from './dtos/update-completed-todo.dto';
import { UpdateTodoDto } from './dtos/updateTodo.dto';
import { Todo } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
@ApiTags('Todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  @ApiOkResponse({
    description: 'Todos obtained succesfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'An error ocurred',
  })
  @HttpCode(200)
  async getTodos(): Promise<Todo[]> {
    return await this.todoService.getTodos();
  }

  @Get('/:id')
  @ApiOkResponse({
    description: 'Todo obtained succesfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'An error ocurred',
  })
  @HttpCode(200)
  async getTodo(@Param('id') id: string): Promise<Todo> {
    return await this.todoService.getTodo(parseInt(id));
  }

  @Post()
  @ApiOkResponse({
    description: 'Todo created succesfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'An error ocurred',
  })
  @HttpCode(201)
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<any> {
    return this.todoService.createTodo(createTodoDto);
  }

  @Put('/:id')
  @ApiOkResponse({
    description: 'Todo updated succesfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'An error ocurred',
  })
  @HttpCode(200)
  async updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return await this.todoService.updateTodo(parseInt(id), updateTodoDto);
  }

  @Patch('/:id')
  @ApiOkResponse({
    description: 'Todo updated succesfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'An error ocurred',
  })
  @HttpCode(200)
  async updateCompleteTodo(
    @Param('id') id: string,
    @Body() updateCompletedTodoDto: UpdateCompletedTodoDto,
  ): Promise<Todo> {
    return await this.todoService.updateCompletedTodo(
      parseInt(id),
      updateCompletedTodoDto,
    );
  }

  @Delete('/:id')
  @ApiOkResponse({
    description: 'Todo deleted succesfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'An error ocurred',
  })
  @HttpCode(200)
  async deleteTodo(@Param('id') id: string): Promise<{ message: string }> {
    await this.todoService.deleteTodo(parseInt(id));
    return {
      message: `Task ${id} deleted succesfully`,
    };
  }
}
