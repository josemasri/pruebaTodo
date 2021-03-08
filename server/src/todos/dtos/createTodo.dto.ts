import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({
    description: 'Task Name',
    example: 'Do my homework',
  })
  name: string;

  @ApiProperty({
    description: 'Task Title',
    example: 'Task 1',
  })
  @IsString()
  @IsNotEmpty()
  title: string;
}
