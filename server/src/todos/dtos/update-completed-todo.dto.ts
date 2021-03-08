import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdateCompletedTodoDto {
  @ApiProperty({
    description: 'Completed task',
    example: true,
  })
  @IsBoolean()
  completed: boolean;
}
