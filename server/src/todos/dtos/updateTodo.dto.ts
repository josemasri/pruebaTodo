import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateTodoDto {
  @ApiProperty({
    description: 'Task Name',
    example: 'Do my homework',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Task Title',
    example: 'Task 1',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Task Completed',
    example: true,
  })
  @IsBoolean()
  completed: boolean;
}
