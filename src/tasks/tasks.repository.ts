import { EntityRepository, Repository } from 'typeorm';
import { Task } from './entities/tasks.entity';
import { CreateTaskDto } from './dtos/create-task.dto';
import { InternalServerErrorException } from '@nestjs/common';
import { EditTaskDto } from './dtos/edit-task.dto';
import { DeleteTaskDto } from './dtos/delete-task.dto';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  async getTasks(): Promise<Task[]> {
    const tasks = await this.find({});
    return tasks;
  }

  async createTask({ title, description }: CreateTaskDto): Promise<Task> {
    const task = this.create({
      title,
      description,
      completed: false,
    });

    try {
      const createdTask = await task.save();
      return createdTask;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async editTask(request: EditTaskDto): Promise<Task> {
    try {
      const originalTask = await this.findOneOrFail(request.id);
      const newTask = { ...originalTask, ...request };
      return await this.create(newTask).save();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async deleteTask({ id }: DeleteTaskDto): Promise<Task> {
    try {
      const task = await this.findOneOrFail(id);
      await this.delete(id);
      return task;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
