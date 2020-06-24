import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { Task } from './entities/tasks.entity';
import { CreateTaskDto } from './dtos/create-task.dto';
import { EditTaskDto } from './dtos/edit-task.dto';
import { DeleteTaskDto } from './dtos/delete-task.dto';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}

  async getTasks(): Promise<Task[]> {
    return await this.tasksRepository.getTasks();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksRepository.createTask(createTaskDto);
  }

  async editTask(editTaskDto: EditTaskDto): Promise<Task> {
    return await this.tasksRepository.editTask(editTaskDto);
  }

  async deleteTask(deleteTaskDto: DeleteTaskDto): Promise<Task> {
    return await this.tasksRepository.deleteTask(deleteTaskDto);
  }
}
