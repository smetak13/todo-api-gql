import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteTaskDto {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;
}
