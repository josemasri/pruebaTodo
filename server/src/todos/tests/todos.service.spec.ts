import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../todo.entity';
import { TodosService } from '../todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Todo])],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', async () => {
    const createTodoDto = { name: 'Todo Test', title: 'Test' };
    const res = await service.createTodo(createTodoDto);
    expect(res.name).toBe(createTodoDto.name);
    expect(res.title).toBe(createTodoDto.title);
    expect(res.id).toBeInstanceOf(Number);
    expect(res.completed).toBe(false);
  });
});
