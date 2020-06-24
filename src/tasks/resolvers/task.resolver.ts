import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { TasksService } from '../tasks.service';
import { EditTaskDto } from '../dtos/edit-task.dto';
import { DeleteTaskDto } from '../dtos/delete-task.dto';

@Resolver()
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => [Task])
  async getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Mutation(() => Task)
  async createTask(
    @Args('input') createTaskDto: CreateTaskDto
  ): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Mutation(() => Task)
  async editTask(
    @Args('input') editTaskDto: EditTaskDto
  ): Promise<Task> {
    return this.tasksService.editTask(editTaskDto);
  }

  @Mutation(() => Task)
  async deleteTask(
    @Args('input') deleteTaskDto: DeleteTaskDto
  ): Promise<Task> {
    return this.tasksService.deleteTask(deleteTaskDto);
  }
}
