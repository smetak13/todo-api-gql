import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTaskDto {
  @IsNotEmpty()
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}
